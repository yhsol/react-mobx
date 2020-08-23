import React from "react";
import logo from "./logo.svg";
import "./App.css";
import OrdersList from "./burger/components/OrdersList";
import OrderForm from "./burger/components/OrderForm";
import TodoList from "./mobx-todo/compoents/TodoList";
import TodoNew from "./mobx-todo/compoents/TodoNew";
import NewsList from "./hacker-news/components/NewsList";
import BookMarks from "./hacker-news/components/BookMarks";
import TodoList2 from "./mobx-todo-2/component/TodoList";
import TodoNew2 from "./mobx-todo-2/component/TodoNew";
import ExpensePolicyList from "./gowid/Settings/ExpensePolicy/ExpensePolicyList";
function App() {
  const styles = {
    margin: "20px",
    padding: "20px",
    fontSize: "20px",
    border: "1px solid black",
  };
  return (
    <>
      <div style={{ ...styles }}>
        <div>Eating Burger 🍔 | Check Todo 📃 | Read News 🗞</div>
      </div>
      <div style={{ ...styles }}>
        Expense Policy
        <ExpensePolicyList />
      </div>
      <div style={{ ...styles }}>
        Todo
        <TodoNew2 />
        <TodoList2 />
      </div>
      <div style={{ ...styles }}>
        Burger
        <OrdersList />
        <OrderForm />
      </div>
      <div style={{ ...styles }}>
        Todo
        <TodoNew />
        <TodoList />
      </div>
      <div style={{ ...styles }}>
        News
        <NewsList />
      </div>
      <div style={{ ...styles }}>
        Bookmarks
        <BookMarks />
      </div>
    </>
  );
}

export default App;
