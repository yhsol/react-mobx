import React, { PropsWithChildren } from "react";
import { NewsStore } from "../stores/newsStore";

type StoresContextValue = {
  newsStore: NewsStore;
  // rootStore: RootStore;
};

const StoresContext = React.createContext<StoresContextValue>(
  {} as StoresContextValue,
);

export function StoresProvider({ children }: { children: any }) {
  const newsStore = new NewsStore();
  // const rootStore = new RootStore();
  return (
    <StoresContext.Provider value={{ newsStore }}>
      {children}
    </StoresContext.Provider>
  );
}

export const useStores = () => React.useContext(StoresContext);
