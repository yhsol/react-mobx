import React from "react";
import { useStore } from "../utils/useStore";
import { useObserver } from "mobx-react-lite";
import TodoItem from "./TodoItem";

function TodoList() {
  const todoList = useStore();
  return useObserver(() => (
    <div>
      <div>
        <span>Open Todos</span>
        {todoList.openTodos.map((todo) =>
          <TodoItem key={`${todo.id}_${todo.text}`} todo={todo} />
        )}
      </div>
      <div>
        <span>Completed Todos</span>
        {todoList.completedTodos.map((todo) =>
          <TodoItem key={`${todo.id}_${todo.text}`} todo={todo} />
        )}
      </div>
    </div>
  ));
}

export default TodoList;
