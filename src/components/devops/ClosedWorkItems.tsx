import React, { FC } from 'react';
import { GetClosedWorkItems } from '@lib/devops';
import { WorkItem } from '@lib/types';
import { useEffect, useState } from 'react';
import WorkItemCard from './WorkItemCard';
import Moment from 'react-moment';
import { motion } from 'framer-motion';

const ClosedWorkItems: FC = () => {
  const [workItems, setWorkItems] = useState([] as WorkItem[]);

  useEffect(() => {
    async function getWorkItemsData() {
      const workItems = await GetClosedWorkItems();
      setWorkItems(workItems);
    }
    getWorkItemsData(); // get data on component mount
  }, []);

  // get todays date in MM dd format
  const today = new Date();

  return (
    <>
      <motion.div
        className="max-w-7xl mx-auto py-8 border-t border-zinc-800 pt-12"
        viewport={{ once: true }}
        initial={{
          opacity: 0,
          y: 5
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        transition={{
          delay: 1
        }}
      >
        <h1 className="text-white text-md lg:text-2xl font-semibold font-roc mb-2 mx-8">
          Closed Work from&nbsp;
          <Moment subtract={{ days: 14 }} format="MMM Do">
            {today}
          </Moment>
          &nbsp;to <Moment format="MMM Do">{today}</Moment>
        </h1>
        <div className="flex flex-col gap-8">
          <div className="bg-gradient-to-b from-zinc-900 to-[#141417] p-5 rounded-3xl h-full mx-8 ">
            <div className="flex justify-items-stretch gap-6 overflow-x-auto">
              {workItems.map((workItem) => (
                <WorkItemCard workItem={workItem} key={workItem.id}>
                  <div className="text-sm text-zinc-500">
                    Closed Date: <Moment format="M/D/yyyy">{workItem.fields['Microsoft.VSTS.Common.ClosedDate']}</Moment>
                  </div>
                </WorkItemCard>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ClosedWorkItems;
