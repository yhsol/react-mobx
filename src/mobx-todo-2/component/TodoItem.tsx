import React, { useState } from "react";
import { TodoItemModel } from "../model/TodoItemModel";
import { useStore } from "../useStore";
import onEnterPress from "../../mobx-todo/utils/useEnter";
import { useRootStores } from "../../RootStoresProvider";

type Props = {
  todo: TodoItemModel;
};

function TodoItem({ todo }: Props) {
  const { todoListStore2 } = useRootStores();
  const [newText, setText] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const saveText = () => {
    todo.updateText(newText);
    setIsEditing(false);
    setText("");
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            onKeyDown={onEnterPress(saveText)}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={saveText}>save</button>
        </div>
      ) : (
        <div>
          <span>{todo.text}</span>
          <input
            type="checkbox"
            onChange={todo.toggleIsDone}
            defaultChecked={todo.isDone}
          />
          <button onClick={() => setIsEditing(true)}>edit</button>
          <button onClick={() => todoListStore2.removeTodo(todo)}>X</button>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
