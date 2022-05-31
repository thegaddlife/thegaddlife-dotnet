import type { NextApiRequest, NextApiResponse } from 'next';
import type { Monitor } from '@lib/types';

type MonitorResponse = {
  stat: string;
  monitors: Monitor[];
};

type ErrorResponse = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Monitor | ErrorResponse>
) {
  const {
    query: { monitorId }
  } = req;

  const url = `https://api.uptimerobot.com/v2/getMonitors?api_key=${process.env.UPTIME_ROBOT_API_KEY}&format=json`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      response_times: 1,
      response_times_limit: 1,
      response_times_average: 1,
      all_time_uptime_ratio: 1,
      custom_uptime_ratios: '7-30-90',
      monitors: monitorId
    })
  };
  const response = await fetch(url, options);
  const json: MonitorResponse = await response.json();
  res.setHeader('Content-Type', 'application/json');

  if (json.stat === 'ok' && json.monitors.length > 0) {
    var monitor = json.monitors[0];

    const uptime_ratios = monitor.custom_uptime_ratio.split('-');
    monitor.uptime_7_days = uptime_ratios[0];
    monitor.uptime_30_days = uptime_ratios[1];
    monitor.uptime_90_days = uptime_ratios[2];

    res.status(200).json(monitor);
  } else {
    res.status(404).json({
      message: 'Monitor not found'
    });
  }
}
