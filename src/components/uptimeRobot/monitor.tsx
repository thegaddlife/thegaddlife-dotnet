import React, { FC } from 'react';
import Link from 'next/link';
import { GetMonitor } from '@lib/UptimeRobot';
import { Monitor } from '@lib/types';
import { useEffect, useState } from 'react';

interface MonitorStatusProps {
  monitorId: string;
}

const MonitorStatus: FC<MonitorStatusProps> = ({ monitorId }) => {
  const [monitor, setMonitor] = useState({ status: 2 } as Monitor);
  const refreshTime = 60000;

  useEffect(() => {
    async function getUptimeData() {
      const response = await GetMonitor(monitorId);
      setMonitor(response);
    }

    getUptimeData(); // get data on component mount
    const monitorInterval = setInterval(getUptimeData, refreshTime); //This will refresh the data at regularIntervals of refreshTime
    return () => clearInterval(monitorInterval); //Clear interval on component unmount to avoid memory leak
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="mx-8">
        <div className="flex justify-between">
          <h1 className="text-white text-2xl font-bold mb-5">
            {monitor.status === 2 ? (
              <>
                <div className="flex">
                  <div className="bg-green-500 h-6 w-6 text-center font-extrabold flex items-center justify-center rounded-full my-auto ring-4 ring-green-200 ring-offset-4 ring-offset-zinc-900 ring-opacity-50 ml-2 mr-6 animate-pulse"></div>
                  System Online
                </div>
              </>
            ) : (
              <>
                <div className="flex">
                  <div className="bg-red-500 h-6 w-6 text-center font-extrabold flex items-center justify-center rounded-full my-auto ring-4 ring-green-200 ring-offset-4 ring-offset-zinc-900 ring-opacity-50 ml-2 mr-6 animate-pulse"></div>
                  System Offline
                </div>
              </>
            )}
          </h1>
          <div className="mb-5">
            <p className="text-white text-mb font-bold font-3">{monitor.friendly_name}</p>
            <p className="text-zinc-400">
              Avg response time: <span className="text-white">{`${monitor.average_response_time} ms`}</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href={`https://status.webmob.dev/${monitor.id}`}>
            <a target="_blank">
              <div className="bg-zinc-900 border border-zinc-800 flex p-8 rounded-2xl hover:-translate-y-2 hover:bg-zinc-800 ease-in-out duration-200 h-full">
                {/* <img src="/img/icons/color/data.svg" alt="color swatch" className="w-16 mr-8" /> */}
                <div className="flex-1">
                  <p className="text-white text-3xl font-roc mb-2 text-center">{monitor.uptime_7_days}%</p>
                  <p className="text-zinc-400 text-center">Last 7 Days</p>
                </div>
              </div>
            </a>
          </Link>
          <Link href={`https://status.webmob.dev/${monitor.id}`}>
            <a>
              <div className="bg-zinc-900 border border-zinc-800 flex p-8 rounded-2xl hover:-translate-y-2 hover:bg-zinc-800 ease-in-out duration-200 h-full">
                {/* <img src="/img/icons/color/data.svg" alt="color swatch" className="w-16 mr-8" /> */}
                <div className="flex-1">
                  <p className="text-white text-3xl font-roc mb-2 text-center">{monitor.uptime_30_days}%</p>
                  <p className="text-zinc-400 text-center">Last 30 Days</p>
                </div>
              </div>
            </a>
          </Link>
          <Link href={`https://status.webmob.dev/${monitor.id}`}>
            <a>
              <div className="bg-zinc-900 border border-zinc-800 flex p-8 rounded-2xl hover:-translate-y-2 hover:bg-zinc-800 ease-in-out duration-200 h-full">
                {/* <img src="/img/icons/color/data.svg" alt="color swatch" className="w-16 mr-8" /> */}
                <div className="flex-1">
                  <p className="text-white text-3xl font-roc mb-2 text-center">{monitor.uptime_90_days}%</p>
                  <p className="text-zinc-400 text-center">Last 90 Days</p>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MonitorStatus;
