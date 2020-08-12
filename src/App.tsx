import React from "react";
import logo from "./logo.svg";
import "./App.css";
import OrdersList from "./burger/components/OrdersList";
import OrderForm from "./burger/components/OrderForm";
import TodoList from "./mobx-todo/compoents/TodoList";
import TodoNew from "./mobx-todo/compoents/TodoNew";

function App() {
  return (
    <>
      {/* <OrdersList />
      <OrderForm /> */}
      <TodoNew />
      <TodoList />
    </>
  );
}

export default App;
