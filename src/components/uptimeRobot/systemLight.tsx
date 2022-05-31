import React, { FC } from 'react';
import Link from 'next/link';
import { GetMonitorStatus, GetDownMonitors } from '@lib/UptimeRobot';
import { Monitor } from '@lib/types';
import { useEffect, useState } from 'react';

const SystemStatusLight: FC = () => {
  const [monitorsUp, setMonitorsUp] = useState(true as boolean);
  const [monitorsDown, setMonitorsDown] = useState([] as Monitor[]);
  const refreshTime = 30000;

  useEffect(() => {
    async function getUptimeData() {
      const monitorStatus = await GetMonitorStatus();
      setMonitorsUp(monitorStatus);

      if (monitorStatus === false) {
        const downMonitors = await GetDownMonitors();
        setMonitorsDown(downMonitors);
      }
    }
    getUptimeData(); // get data on component mount
    const monitorInterval = setInterval(getUptimeData, refreshTime); //This will refresh the data at regularIntervals of refreshTime
    return () => clearInterval(monitorInterval); //Clear interval on component unmount to avoid memory leak
  }, []);

  return (
    <>
      <Link href="https://status.webmob.dev">
        <a target="_blank">
          <div className="py-2 px-4 hover:bg-zinc-800 rounded-md transition-all ease-in-out duration-200 grid content-center">
            {monitorsUp === true ? (
              <div className="flex items-center">
                <div className="bg-emerald-500 h-2 w-2 text-center font-extrabold flex items-center justify-center rounded-full my-auto ring-2 ring-emerald-500 ring-offset-4 ring-offset-zinc-900 ring-opacity-50 mr-4 animate-pulse"></div>
                <h1 className="text-white font-bold text-md">
                  Systems
                  <span className="text-emerald-500"> online</span>
                </h1>
              </div>
            ) : (
              <>
                <div className="flex items-center">
                  <div className="bg-red-500 h-2 w-2 text-center font-extrabold flex items-center justify-center rounded-full my-auto ring-2 ring-red-200 ring-offset-4 ring-offset-zinc-900 ring-opacity-50 ml-2 mr-6 animate-pulse"></div>
                  <h1 className="text-white font-bold text-xl">Experiencing issues with the following systems:</h1>
                </div>

                <ul className="mt-5 ml-10">
                  {monitorsDown.map((monitor) => (
                    <li className="text-gray-50" key={monitor.id}>
                      {monitor.friendly_name}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </a>
      </Link>
    </>
  );
};

export default SystemStatusLight;
