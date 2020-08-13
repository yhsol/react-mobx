import React from "react";
import { useStore } from "../utils/useStore";
import { useObserver } from "mobx-react-lite";
import TodoItem from "./TodoItem";
import { useRootStores } from "../../RootStoresProvider";

function TodoList() {
  const { todoListStore } = useRootStores();
  return useObserver(() => (
    <div>
      <div>
        <span>Open Todos</span>
        {todoListStore.openTodos.map((todo) =>
          <TodoItem key={`${todo.id}_${todo.text}`} todo={todo} />
        )}
      </div>
      <div>
        <span>Completed Todos</span>
        {todoListStore.completedTodos.map((todo) =>
          <TodoItem key={`${todo.id}_${todo.text}`} todo={todo} />
        )}
      </div>
    </div>
  ));
}

export default TodoList;
