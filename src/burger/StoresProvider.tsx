import React, { PropsWithChildren } from "react";
import { OrdersStore } from "./stores/OrdersStore";
import { ProductsStore } from "./stores/ProductsStore";

type StoresContextValue = {
  productsStore: ProductsStore;
  ordersStore: OrdersStore;
  // rootStore: RootStore;
};

const StoresContext = React.createContext<StoresContextValue>(
  {} as StoresContextValue,
);

export function StoresProvider({ children }: { children: any }) {
  const productsStore = new ProductsStore();
  const ordersStore = new OrdersStore(productsStore);
  // const rootStore = new RootStore();
  return (
    <StoresContext.Provider value={{ productsStore, ordersStore }}>
      {children}
    </StoresContext.Provider>
  );
}

export const useStores = () => React.useContext(StoresContext);
