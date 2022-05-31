import React, { FC } from 'react';
import { WorkItem } from '@lib/types';
import { BookOpenIcon, ExclamationCircleIcon, DocumentTextIcon } from '@heroicons/react/solid';
import Link from 'next/link';

type WorkItemProps = {
  workItem: WorkItem;
  children?: React.ReactNode;
};

// create a hashmap of area colors
const areaColors = new Map<string, string>();
areaColors.set('Website', 'bg-gradient-to-r from-sky-600 to-fuchsia-600');
areaColors.set('DTD', 'bg-pink-700');
areaColors.set('CRC', 'bg-amber-500');
areaColors.set('B2C', 'bg-blue-700');
areaColors.set('Azure', 'bg-blue-700');
areaColors.set('WebMob.dev', 'bg-purple-700');
areaColors.set('default', 'bg-slate-500');
areaColors.set('K-LOVE', 'bg-sky-500');

// function to get color string based on work item type
function getAreaColor(area: string) {
  return areaColors.get(area) || areaColors.get('default');
}

const WorkItemCard: FC<WorkItemProps> = ({ workItem, children }) => {
  // format the areapath, only grabbing the last part of the path
  const areaPath = workItem.fields['System.AreaPath'].split('\\').pop();
  let areaString = '';

  // if area path is not defined, set value to default
  if (areaPath === undefined) {
    areaString = 'default';
  } else {
    areaString = areaPath;
  }
  const areaColor = getAreaColor(areaString);

  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[18rem] border border-zinc-700">
      <div className="flex mb-2 items-center">
        {workItem.fields['System.WorkItemType'] === 'User Story' && <BookOpenIcon className="flex-none w-5 h-5 text-sky-500 mr-2" />}
        {workItem.fields['System.WorkItemType'] === 'Content' && <DocumentTextIcon className="flex-none w-5 h-5 text-amber-500 mr-2" />}
        {workItem.fields['System.WorkItemType'] === 'Bug' && <ExclamationCircleIcon className="flex-none w-5 h-5 text-red-500 mr-2" />}
        <div className="text-white font-medium text-sm grow ">{workItem.fields['System.Id']}</div>

        <div className={`text-white text-xs rounded p-1 px-2 ${areaColor}`}>{areaPath}</div>
      </div>

      <div className="text-white">{workItem.fields['System.Title']}</div>
      {children}

      {
        // if item has parent, display parent id
        workItem.fields['System.Parent'] && (
          <div className="mt-5">
            <Link href={`https://emfcorp.visualstudio.com/Technology-Web/_workitems/edit/${workItem.fields['System.Parent']}`} passHref>
              <a target="_blank">
                <div className="flex items-center rounded-md bg-zinc-900 p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-4 w-4 fill-purple-500 mr-2 flex-none">
                    <path d="M572.1 82.38C569.5 71.59 559.8 64 548.7 64h-100.8c.2422-12.45 .1078-23.7-.1559-33.02C447.3 13.63 433.2 0 415.8 0H160.2C142.8 0 128.7 13.63 128.2 30.98C127.1 40.3 127.8 51.55 128.1 64H27.26C16.16 64 6.537 71.59 3.912 82.38C3.1 85.78-15.71 167.2 37.07 245.9c37.44 55.82 100.6 95.03 187.5 117.4c18.7 4.805 31.41 22.06 31.41 41.37C256 428.5 236.5 448 212.6 448H208c-26.51 0-47.99 21.49-47.99 48c0 8.836 7.163 16 15.1 16h223.1c8.836 0 15.1-7.164 15.1-16c0-26.51-21.48-48-47.99-48h-4.644c-23.86 0-43.36-19.5-43.36-43.35c0-19.31 12.71-36.57 31.41-41.37c86.96-22.34 150.1-61.55 187.5-117.4C591.7 167.2 572.9 85.78 572.1 82.38zM77.41 219.8C49.47 178.6 47.01 135.7 48.38 112h80.39c5.359 59.62 20.35 131.1 57.67 189.1C137.4 281.6 100.9 254.4 77.41 219.8zM498.6 219.8c-23.44 34.6-59.94 61.75-109 81.22C426.9 243.1 441.9 171.6 447.2 112h80.39C528.1 135.7 526.5 178.7 498.6 219.8z" />
                  </svg>
                  <div className="text-xs text-white">{workItem.parent.fields['System.Title']}</div>
                </div>
              </a>
            </Link>
          </div>
        )
      }
    </div>
  );
};

export default WorkItemCard;
