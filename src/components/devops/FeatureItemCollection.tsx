import React, { FC } from 'react';
import { GetWorkItemsByQueryId } from '@lib/devops';
import { WorkItem } from '@lib/types';
import { useEffect, useState } from 'react';
import FeatureItemCard from '@components/devops/FeatureItemCard';

type FeatureItemCollectionProps = {
  queryId: number;
};

const FeatureItemCollection: FC<FeatureItemCollectionProps> = ({ queryId }) => {
  const [workItems, setWorkItems] = useState([] as WorkItem[]);

  useEffect(() => {
    async function getWorkItemsData() {
      const workItems = await GetWorkItemsByQueryId(queryId);

      // sort by stack rank
      workItems.sort((a, b) => {
        if (a.fields['Microsoft.VSTS.Common.StackRank'] < b.fields['Microsoft.VSTS.Common.StackRank']) {
          return -1;
        }
        if (a.fields['Microsoft.VSTS.Common.StackRank'] > b.fields['Microsoft.VSTS.Common.StackRank']) {
          return 1;
        }
        return 0;
      });

      setWorkItems(workItems);
    }
    getWorkItemsData(); // get data on component mount
  }, []);

  return (
    <>
      <div>
        {workItems.map((workItem) => (
          <FeatureItemCard workItem={workItem} key={workItem.id}></FeatureItemCard>
        ))}
      </div>
    </>
  );
};

export default FeatureItemCollection;
