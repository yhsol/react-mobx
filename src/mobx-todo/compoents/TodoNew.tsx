import React, { useState } from "react";
import { useStore } from "../utils/useStore";
import onPressEnter from "../utils/useEnter";

function TodoNew() {
  const [newTodo, setTodo] = useState("");
  const todoList = useStore();

  const addTodo = () => {
    todoList.addTodo(newTodo);
    setTodo("");
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onKeyDown={onPressEnter(addTodo)}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default TodoNew;
