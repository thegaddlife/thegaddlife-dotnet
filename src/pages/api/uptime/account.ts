import type { NextApiRequest, NextApiResponse } from 'next';
import type { Account } from '@lib/types';

type AccountResponse = {
  stat: string;
  account: Account;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Account>
) {
  const url = `https://api.uptimerobot.com/v2/getAccountDetails?api_key=${process.env.UPTIME_ROBOT_API_KEY}&format=json`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      api_key: process.env.UPTIME_ROBOT_API_KEY
    })
  };
  const response = await fetch(url, options);
  const json: AccountResponse = await response.json();
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    up_monitors: json.account.up_monitors,
    down_monitors: json.account.down_monitors,
    paused_monitors: json.account.paused_monitors,
    total_monitors_count: json.account.total_monitors_count
  });
}
