import { useContext } from "react";
import { StoreContext } from "./RootStore";
import { TodoList } from "../stores/TodoListStore";

export const useStore = (): TodoList => useContext(StoreContext);
