import type { NextApiRequest, NextApiResponse } from 'next';
import { WorkItem } from '@lib/types';

const AUTH_HEADER = `Basic ${process.env.AZURE_DEVOPS_API_KEY}`;

type WiqlResponse = {
  workItems: WiqlWorkItem[];
};

type ErrorResponse = {
  message: string;
};

type WiqlWorkItem = {
  id: number;
  url: string;
};

type WorkItemsBatchResponse = {
  count: number;
  value: WorkItem[];
};

type WiqlQuery = {
  id: number;
  description: string;
  query: string;
  getRelationships: boolean;
};

type WorkItemRelation = {
  rel: string;
  source: WorkItem;
  target: WorkItem;
};

type WorkItemRelationsResponse = {
  queryType: string;
  queryResultType: string;
  asOf: Date;
  workItemRelations: WorkItemRelation[];
};

/// Azure Devops WIQL Queries
/// @see https://docs.microsoft.com/en-us/azure/devops/boards/queries/wiql-syntax?view=azure-devops
const wiqlQueries: WiqlQuery[] = [
  {
    id: 0,
    description: 'Get active work items',
    query: "Select [System.Id], [System.Title], [System.State], [System.AreaPath], [System.Parent] From WorkItems WHERE [Team Project] = 'Technology-Web' AND [Work Item Type] IN ('User Story', 'Bug', 'Content') AND [State] IN ('Active', 'QA', 'UAT', 'Release')",
    getRelationships: false
  },
  {
    id: 1,
    description: 'Get closed work items',
    query: "Select [System.Id], [System.Title], [System.State], [System.AreaPath]  From WorkItems WHERE [Team Project] = 'Technology-Web' AND [Work Item Type] IN ('User Story', 'Bug', 'Content') AND [State] = 'Closed' AND [Closed Date] >=@Today-14 ORDER BY [Closed Date] Desc",
    getRelationships: false
  },
  {
    id: 2,
    description: 'Features that are in Phase1 in the Requests, SOW and Refinement and Backlog column',
    query: "Select [System.Id], [System.Title], [System.State], [Microsoft.VSTS.Common.StackRank] From WorkItems WHERE [Team Project] = 'Technology-Web' AND [System.WorkItemType] = 'Feature' AND [System.BoardColumn] IN ('Requests', 'SOW', 'Refinement', 'Backlog') ORDER BY [Microsoft.VSTS.Common.StackRank]",
    getRelationships: true
  },
  {
    id: 3,
    description: 'Features in Phase2, the active stage',
    query: "Select [System.Id], [System.Title], [System.State], [Microsoft.VSTS.Common.StackRank] From WorkItems WHERE [Team Project] = 'Technology-Web' AND [System.WorkItemType] = 'Feature' AND [System.BoardColumn] IN ('Active') ORDER BY [Microsoft.VSTS.Common.StackRank]",
    getRelationships: true
  },
  {
    id: 4,
    description: 'Features closed in the last 90 days',
    query: "Select [System.Id], [System.Title], [System.State] From WorkItems WHERE [Team Project] = 'Technology-Web' AND [System.WorkItemType] = 'Feature' AND [Closed Date] >=@Today-90 ORDER BY [Closed Date] Desc",
    getRelationships: true
  }
];

export default async function handler(req: NextApiRequest, res: NextApiResponse<WorkItem[] | ErrorResponse>) {
  const {
    query: { queryId }
  } = req;

  // convert queryId to number
  const queryIndex = parseInt(queryId.toString());

  // if queryIndex is in range, get query
  if (queryIndex >= 0 && queryIndex < wiqlQueries.length) {
    // get wiql work items
    const wiqlResponse = await getWorkItemsByWiql(queryIndex);
    // get the ids of the work items
    const ids = wiqlResponse.map((item) => item.id);

    // send the batch request
    const batchResponse = await getWorkItemsByBatchRequest(ids);

    // get an array of parent ids excluding any duplicates or nulls
    // eslint-disable-next-line eqeqeq
    let parentIds = batchResponse.map((item) => item.fields['System.Parent']).filter((item) => item != null || item != undefined);
    const parentBatchResponse = await getWorkItemsByBatchRequest(parentIds);

    //  map the workitem parent item
    let results: WorkItem[] = batchResponse.reduce((results: WorkItem[], item: WorkItem) => {
      const parent = parentBatchResponse.find((parent) => parent.id === item.fields['System.Parent']);

      if (parent) {
        item.parent = parent;
        item.children = [];
      }
      results.push(item);
      return results;
    }, []);

    // if the wiql should get children, get the children
    if (wiqlQueries[queryIndex].getRelationships) {
      results = await fetchChildren(results);
    }

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(results);
  } else {
    res.status(404).json({
      message: 'Query Index not found'
    });
  }
}

/// Get the WorkItems children if any exist
/// @param workItems the collection of work items to get the children for
async function fetchChildren(workItems: WorkItem[] = []): Promise<WorkItem[]> {
  // asynchronously map through the workItems
  await Promise.all(
    workItems.map(async (item: WorkItem) => {
      // get the workItemRelationships
      const workItemRelationships = await getWorkItemRelations(item.id);
      // get id's of the children
      const childrenIds = workItemRelationships.filter((relation) => relation.rel === 'System.LinkTypes.Hierarchy-Forward').map((relation) => relation.target.id);
      // execute batch query to get children work items
      const childrenBatchResponse = await getWorkItemsByBatchRequest(childrenIds);

      // find the workItem in the array and add the children
      const workItem = workItems.find((workItem) => workItem.id === item.id);
      if (workItem) {
        workItem.children = childrenBatchResponse;
      }
    })
  );

  return workItems;
}

/// Get the results of a given WIQL query
/// @param {number} queryIndex - the index of the query in the wiqlQueries array
/// @returns {Promise<WiqlWorkItem>} - the results of the WIQL query
/// @see https://docs.microsoft.com/en-us/rest/api/azure/devops/wit/wiql/query-by-wiql?view=azure-devops-rest-6.0
async function getWorkItemsByWiql(queryIndex: number): Promise<WiqlWorkItem[]> {
  const wiqlUrl = `https://dev.azure.com/emfcorp/Technology-Web/_apis/wit/wiql?api-version=6.0`;

  // build wiql query for work items active/in progress
  let requestOptions = {
    query: wiqlQueries[queryIndex].query
  };

  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: AUTH_HEADER
    },
    body: JSON.stringify(requestOptions)
  };
  // send wiql query to devops api
  const wiqlResponse = await fetch(wiqlUrl, options);
  const wiqlJson: WiqlResponse = await wiqlResponse.json();

  // if wiqlJson is null return empty array
  if (wiqlJson.workItems.length === 0) {
    return [];
  }

  // return work items
  return wiqlJson.workItems;
}

/// Get the results of a given batch request
/// @param {number[]} ids - the ids of the work items to get
/// @returns {Promise<WorkItem[]>} - the results of the batch request
/// @see https://docs.microsoft.com/en-us/rest/api/azure/devops/wit/work-items/get-work-items-batch?view=azure-devops-rest-6.0
async function getWorkItemsByBatchRequest(batchIds: (number | undefined)[]): Promise<WorkItem[]> {
  // log event to debug console
  const batchUrl = `https://dev.azure.com/emfcorp/Technology-Web/_apis/wit/workitemsbatch?api-version=6.0`;

  // create the batch request
  const batchRequest = {
    ids: batchIds,
    fields: ['System.Id', 'System.Title', 'System.WorkItemType', 'System.State', `System.AreaPath`, `System.Parent`, `Microsoft.VSTS.Common.ClosedDate`, `Microsoft.VSTS.Common.StackRank`, `Custom.RICEScore`, `Custom.RequestingDepartment`, `Microsoft.VSTS.Scheduling.StoryPoints`]
  };

  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: AUTH_HEADER
    },
    body: JSON.stringify(batchRequest)
  };

  // send the batch request
  const response = await fetch(batchUrl, options);
  const json: WorkItemsBatchResponse = await response.json();

  return json.value;
}

/// Get the relations of a given work item
/// @param {number} id - the id of the work item to get
/// @returns {Promise<WorkItemRelations>} - the relations of the work item
/// @see https://docs.microsoft.com/en-us/azure/devops/boards/queries/wiql-syntax?view=azure-devops#query-for-links-between-work-items=
/// rel value of "System.LinkTypes.Hierarchy-Reverse" identifies the parent of the work item
/// rel value of "System.LinkTypes.Hierarchy-Forward" identifies the child of the work item
async function getWorkItemRelations(workItemId: number): Promise<WorkItemRelation[]> {
  const relationsUrl = `https://dev.azure.com/emfcorp/Technology-Web/_apis/wit/wiql?api-version=6.0`;

  // build wiql query for work items relations
  let requestOptions = {
    query: `SELECT [System.Id], [System.Title] FROM WorkItemLinks WHERE ([Source].[System.Id] = ${workItemId}) MODE (MustContain)`
  };

  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: AUTH_HEADER
    },
    body: JSON.stringify(requestOptions)
  };

  const response = await fetch(relationsUrl, options);
  const json: WorkItemRelationsResponse = await response.json();

  return json.workItemRelations;
}
