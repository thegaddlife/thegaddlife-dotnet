import { Monitor, Account } from '@lib/types';

export async function GetMonitors(): Promise<Monitor[]> {
  const url = `/api/uptime/monitors`;

  const options = {
    method: 'GET'
  };

  const response = await fetch(url, options);
  const json: Monitor[] = await response.json();

  return json;
}

export async function GetMonitor(id: string): Promise<Monitor> {
  const url = `/api/uptime/monitors/${id}`;

  const options = {
    method: 'GET'
  };

  const response = await fetch(url, options);
  const json: Monitor = await response.json();

  return json;
}

export async function GetDownMonitors(): Promise<Monitor[]> {
  const url = `/api/uptime/monitors?statuses=8-9`;

  const options = {
    method: 'GET'
  };

  const response = await fetch(url, options);
  const json: Monitor[] = await response.json();

  return json;
}

export async function GetAccount(): Promise<Account> {
  const url = `/api/uptime/account`;

  const options = {
    method: 'GET'
  };

  const response = await fetch(url, options);
  const json: Account = await response.json();

  return json;
}

export async function GetMonitorStatus(): Promise<boolean> {
  const account = await GetAccount();

  if (account.up_monitors === account.total_monitors_count) {
    return true;
  }

  return false;
}
