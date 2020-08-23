import { AxiosResponse } from 'axios';

export type Hits = {
  objectID?: number;
  url?: string;
  title?: string;
};

export type News = AxiosResponse<any> & {
  hits: Hits[];
};

export type memberInfoType = {
  id: string;
  avatar?: string;
  name?: string;
  department?: string;
  position?: string;
  email?: string;
};

export type createMemberType = {
  name: string;
  department: string;
  position: string;
  email: string;
};
