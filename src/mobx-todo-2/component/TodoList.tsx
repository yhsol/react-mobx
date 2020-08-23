import React from "react";
import { useStore } from "../useStore";
import { observer, useObserver } from "mobx-react-lite";
import TodoItem from "./TodoItem";
import { useRootStores } from "../../RootStoresProvider";

function TodoList() {
  const { todoListStore2 } = useRootStores();
  return (
    <div>
      <div>
        <span>Open Todos</span>
        {todoListStore2.openTodos.map((todo, index) => (
          <TodoItem key={`${todo.id}-${todo.text}-${index}`} todo={todo} />
        ))}
      </div>
      <div>
        <span>Finished Todos</span>
        {todoListStore2.finishedTodos.map((todo) => (
          <TodoItem key={`${todo.id}-${todo.text}`} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default observer(TodoList);
