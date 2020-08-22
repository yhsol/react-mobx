import { createContext } from "react";
import { TodoListStore } from "./store/TodoListStore";

export const StoreContext = createContext<TodoListStore>({} as TodoListStore);
export const StoreProvider = StoreContext.Provider;
