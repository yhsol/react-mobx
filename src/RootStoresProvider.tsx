import React, { PropsWithChildren } from "react";
import { ProductsStore } from "./burger/stores/ProductsStore";
import { OrdersStore } from "./burger/stores/OrdersStore";
import { TodoList } from "./mobx-todo/stores/TodoListStore";
import { NewsStore } from "./hacker-news/stores/newsStore";

type StoresContextValue = {
  productsStore: ProductsStore;
  ordersStore: OrdersStore;
  todoListStore: TodoList;
  newsStore: NewsStore;
};

const StoresContext = React.createContext<StoresContextValue>(
  {} as StoresContextValue
);

export function RootStoresProvider({ children }: { children: any }) {
  const productsStore = new ProductsStore();
  const ordersStore = new OrdersStore(productsStore);
  const todoListStore = new TodoList(["test1", "test2", "test3"]);
  const newsStore = new NewsStore();

  const rootStore = {
    productsStore,
    ordersStore,
    todoListStore,
    newsStore,
  };

  return (
    <StoresContext.Provider
      value={{ productsStore, ordersStore, todoListStore, newsStore }}
    >
      {children}
    </StoresContext.Provider>
  );
}

export const useRootStores = () => React.useContext(StoresContext);
