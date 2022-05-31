import type { NextApiRequest, NextApiResponse } from 'next';
import type { Monitor } from '@lib/types';

type MonitorResponse = {
  stat: string;
  monitors: Monitor[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Monitor[]>
) {
  const {
    query: { statuses }
  } = req;

  const url = `https://api.uptimerobot.com/v2/getMonitors?api_key=${process.env.UPTIME_ROBOT_API_KEY}&format=json`;
  let requestOptions = {
    response_times: 1,
    response_times_limit: 1,
    response_times_average: 30,
    all_time_uptime_ratio: 1
  };
  if (statuses) {
    // add status to requestOptions
    requestOptions = {
      ...requestOptions,
      ...{ statuses }
    };
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestOptions)
  };
  const response = await fetch(url, options);
  const json: MonitorResponse = await response.json();
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(json.monitors);
}
