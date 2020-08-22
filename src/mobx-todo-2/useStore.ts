import { useContext } from "react";
import { TodoListStore } from "./store/TodoListStore";
import { StoreContext } from "./RootStore";

export const useStore = (): TodoListStore => useContext(StoreContext);
