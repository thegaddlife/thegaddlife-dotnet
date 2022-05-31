export type Monitor = {
  id: number;
  friendly_name: string;
  url: string;
  type: number;
  sub_type: string;
  status: 2;
  all_time_uptime_ratio: string;
  create_datetime: number;
  custom_uptime_ratio: string;
  response_times: MonitorResponseTime[] | null;
  average_response_time: string | null;
  uptime_7_days: string | null;
  uptime_30_days: string | null;
  uptime_90_days: string | null;
};

export type MonitorResponseTime = {
  datetime: number;
  value: number;
};

export type Account = {
  up_monitors: number;
  down_monitors: number;
  paused_monitors: number;
  total_monitors_count: number;
};

export type WorkItem = {
  id: number;
  rev: number;
  fields: WorkItemFields;
  url: string;
  parent: WorkItem;
  children: WorkItem[];
};

export type WorkItemFields = {
  'System.Id': number;
  'System.Title': string;
  'System.State': string;
  'System.WorkItemType': string;
  'System.AreaPath': string;
  'System.Parent': number | undefined;
  'Microsoft.VSTS.Common.ClosedDate': Date;
  'Microsoft.VSTS.Common.StackRank': number;
  'Custom.RICEScore': number;
  'Custom.RequestingDepartment': number;
  'Microsoft.VSTS.Scheduling.StoryPoints': number;
};
