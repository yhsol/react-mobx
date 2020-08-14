export type Hits = {
  objectID?: number;
  url?: string;
  title?: string;
};

export type News = AxiosResponse<any> & {
  hits: Hits[];
};
