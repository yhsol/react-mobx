import React, { useState } from "react";
import { useStore } from "../utils/useStore";
import onEnterPress from "../utils/useEnter";
import { useRootStores } from "../../RootStoresProvider";

function TodoNew() {
  const [newTodo, setTodo] = useState("");
  const { todoListStore } = useRootStores();

  const addTodo = () => {
    todoListStore.addTodo(newTodo);
    setTodo("");
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onKeyDown={onEnterPress(addTodo)}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default TodoNew;
