import { createContext } from "react";
import { TodoList } from "../stores/TodoListStore";

export const StoreContext = createContext<TodoList>({} as TodoList);
export const StoreProvider = StoreContext.Provider;
