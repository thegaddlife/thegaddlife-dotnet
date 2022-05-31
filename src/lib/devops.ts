import { WorkItem } from '@lib/types';

/// Get Active Work items currently in progress
/// @returns {Promise<WorkItem[]>} - Collection of WorkItems
export async function GetActiveWorkItems(): Promise<WorkItem[]> {
  const url = `/api/devops/workitems/0`;

  const options = {
    method: 'GET'
  };

  const response = await fetch(url, options);
  const json: WorkItem[] = await response.json();

  return json;
}

/// Get WorkItems that have been closed in the last 2 weeks
/// @returns {Promise<WorkItem[]>} - Collection of WorkItems
export async function GetClosedWorkItems(): Promise<WorkItem[]> {
  const url = `/api/devops/workitems/1`;

  const options = {
    method: 'GET'
  };

  const response = await fetch(url, options);
  const json: WorkItem[] = await response.json();

  // sort items by closed date
  json.sort((a, b) => {
    if (a.fields['Microsoft.VSTS.Common.ClosedDate'] < b.fields['Microsoft.VSTS.Common.ClosedDate']) {
      return 1;
    }
    if (a.fields['Microsoft.VSTS.Common.ClosedDate'] > b.fields['Microsoft.VSTS.Common.ClosedDate']) {
      return -1;
    }
    return 0;
  });

  // only take the first 10 items
  return json.slice(0, 10);
}

/// Get WorkItems by WIQL queryID
/// @param {number} queryIndex - the index of the query in the wiqlQueries array
/// @returns {Promise<WorkItem[]>} - Collection of WorkItems
export async function GetWorkItemsByQueryId(queryId: number): Promise<WorkItem[]> {
  const url = `/api/devops/workitems/${queryId}`;

  const options = {
    method: 'GET'
  };

  const response = await fetch(url, options);
  const json: WorkItem[] = await response.json();

  return json;
}
