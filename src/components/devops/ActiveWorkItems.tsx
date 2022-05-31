import React, { FC } from 'react';
import { GetActiveWorkItems } from '@lib/devops';
import { WorkItem } from '@lib/types';
import { useEffect, useState } from 'react';
import WorkItemCard from './WorkItemCard';
import { motion } from 'framer-motion';

type WorkColumn = {
  title: string;
  state: string[];
};
const WorkColumns: WorkColumn[] = [
  { title: 'Active', state: ['Active', 'QA', 'UAT'] },
  // { title: 'QA', state: 'QA' },
  // { title: 'UAT', state: 'UAT' },
  { title: 'Release', state: ['Release'] }
];

const ActiveWorkItems: FC = () => {
  const [workItems, setWorkItems] = useState([] as WorkItem[]);

  useEffect(() => {
    async function getWorkItemsData() {
      const workItems = await GetActiveWorkItems();
      setWorkItems(workItems);
    }
    getWorkItemsData(); // get data on component mount
  }, []);

  return (
    <>
      <motion.div
        className="max-w-7xl mx-auto py-8"
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
        {/* <div className="text-white text-2xl font-bold mb-2 mx-8">Work in Progress</div> */}
        <div className="flex flex-col gap-8 mx-8">
          {WorkColumns.map((column) => (
            <div key={column.title} className="">
              <div className="text-white text-md lg:text-2xl font-semibold font-roc mb-2">{column.title}</div>

              <div className="bg-gradient-to-b from-zinc-900 to-[#141417] p-5 rounded-3xl h-full">
                <div className="flex gap-6 overflow-x-auto">
                  {
                    // get work items for this state
                    workItems
                      // filter by state within the string array
                      .filter((item) => column.state.includes(item.fields['System.State']))
                      .map((workItem) => (
                        <>
                          <WorkItemCard workItem={workItem} key={workItem.id} />
                        </>
                      ))
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default ActiveWorkItems;
