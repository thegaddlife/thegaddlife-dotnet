import React, { FC } from 'react';
import { WorkItem } from '@lib/types';
import Link from 'next/link';

type FeatureItemProps = {
  workItem: WorkItem;
  children?: React.ReactNode;
};

const FeatureItemCard: FC<FeatureItemProps> = ({ workItem, children }) => {
  const projectSize = workItem.children?.reduce((acc, curr) => acc + curr.fields['Microsoft.VSTS.Scheduling.StoryPoints'], 0);

  return (
    <Link href={`https://emfcorp.visualstudio.com/Technology-Web/_workitems/edit/${workItem.id}`}>
      <a>
        <div className="bg-zinc-800 p-5 rounded-2xl border border-zinc-700 mb-5">
          <div className="flex mb-2 items-center">
            <div className="text-white text-sm grow ">{workItem.fields['System.Id']}</div>
          </div>

          <div className="text-white">{workItem.fields['System.Title']}</div>
          <div className="text-white">RICE Score: {workItem.fields['Custom.RICEScore']}</div>
          <div className="text-white">Requesting Department: {workItem.fields['Custom.RequestingDepartment']}</div>
          <div className="text-white">Parent Item: {workItem.parent?.fields['System.Title']}</div>
          <div className="text-white">Project Size: {projectSize}</div>

          {children}
        </div>
      </a>
    </Link>
  );
};

export default FeatureItemCard;
