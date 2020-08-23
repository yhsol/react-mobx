import React, { PropsWithChildren } from "react";
import { ProductsStore } from "./burger/stores/ProductsStore";
import { OrdersStore } from "./burger/stores/OrdersStore";
import { TodoList } from "./mobx-todo/stores/TodoListStore";
import { NewsStore } from "./hacker-news/stores/newsStore";
import { TodoListStore } from "./mobx-todo-2/store/TodoListStore";
import { ExpensePolicyStore } from "./gowid/Settings/ExpensePolicy/stores/ExpensePolicyStore";

type StoresContextValue = {
  productsStore: ProductsStore;
  ordersStore: OrdersStore;
  todoListStore: TodoList;
  newsStore: NewsStore;
  todoListStore2: TodoListStore;
  expensePolicyStore: ExpensePolicyStore;
};

const StoresContext = React.createContext<StoresContextValue>(
  {} as StoresContextValue
);

export function RootStoresProvider({ children }: { children: any }) {
  const productsStore = new ProductsStore();
  const ordersStore = new OrdersStore(productsStore);
  const todoListStore = new TodoList(["test1", "test2", "test3"]);
  const newsStore = new NewsStore();
  const todoListStore2 = new TodoListStore(["test2", "test2", "tset3"]);
  const expensePolicyStore = new ExpensePolicyStore();

  const rootStore = {
    productsStore,
    ordersStore,
    todoListStore,
    newsStore,
    todoListStore2,
    expensePolicyStore,
  };

  return (
    <StoresContext.Provider
      value={{
        productsStore,
        ordersStore,
        todoListStore,
        newsStore,
        todoListStore2,
        expensePolicyStore,
      }}
    >
      {children}
    </StoresContext.Provider>
  );
}

export const useRootStores = () => React.useContext(StoresContext);
