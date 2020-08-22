import React, { useState } from "react";
import { useStore } from "../useStore";
import onEnterPress from "../useEnter";
import { useRootStores } from "../../RootStoresProvider";

function TodoNew() {
  const [newTodo, setTodo] = useState("");
  const { todoListStore2 } = useRootStores();

  const addTodo = () => {
    todoListStore2.addTodo(newTodo);
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
