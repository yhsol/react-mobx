import React, { useState } from "react";
import { useStore } from "../utils/useStore";
import onPressEnter from "../utils/useEnter";
import TodoItemClass from "../stores/TodoItemStore";

type Props = {
  todo: TodoItemClass;
};

function TodoItem({ todo }: Props) {
  const todoList = useStore();
  const [newText, setText] = useState("");
  const [isEditing, setEdit] = useState(false);

  const saveText = () => {
    todo.updateText(newText);
    setEdit(false);
    setText("");
  };

  return (
    <div>
      {isEditing
        ? <div>
          <input
            type="text"
            onKeyDown={onPressEnter(saveText)}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={saveText}>save</button>
        </div>
        : <div>
          <span>{todo.text}</span>
          <input
            type="checkbox"
            onChange={todo.toggleIsDone}
            defaultChecked={todo.isDone}
          >
          </input>
          <button onClick={() => setEdit(true)}>edit</button>
          <button onClick={() => todoList.removeTodo(todo)}>X</button>
        </div>}
    </div>
  );
}

export default TodoItem;
