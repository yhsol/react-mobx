import React from "react";
import logo from "./logo.svg";
import "./App.css";
import OrdersList from "./components/OrdersList";
import OrderForm from "./components/OrderForm";

function App() {
  return (
    <>
      <OrdersList />
      <OrderForm />
    </>
  );
}

export default App;
