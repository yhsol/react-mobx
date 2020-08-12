export type Product = {
  name: string;
  displayName: string;
  price: number;
};

export type userInfo = {
  username: string;
};

export type User = {
  uid?: number;
  user?: userInfo;
  [index: number]: userInfo;
};
