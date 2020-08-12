import React from "react";
import logo from "./logo.svg";
import "./App.css";
import OrdersList from "./components/OrdersList";
import OrderForm from "./components/OrderForm";
import TodoList from "./mobx-todo/compoents/TodoList";

function App() {
  return (
    <>
      {/* <OrdersList />
      <OrderForm /> */}
      <TodoList />
    </>
  );
}

export default App;
