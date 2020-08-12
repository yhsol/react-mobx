import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { StoresProvider } from "./StoresProvider";
import { StoreProvider, StoreContext } from "./mobx-todo/utils/RootStore";
import { TodoList } from "./mobx-todo/stores/TodoListStore";

const todoList = new TodoList([
  "test1",
  "test2",
  "test3",
]);

ReactDOM.render(
  // <StoresProvider>
  <StoreProvider value={todoList}>
    <App />
  </StoreProvider>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
