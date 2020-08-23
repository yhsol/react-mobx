import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react-lite";
import { useRootStores } from "../../RootStoresProvider";

function Counter() {
  const { counterStore } = useRootStores();
  return (
    <div>
      <h1>{counterStore.number}</h1>
      <button onClick={counterStore.increase}>+</button>
      <button onClick={counterStore.decrease}>-</button>
    </div>
  );
}

export default observer(Counter);
