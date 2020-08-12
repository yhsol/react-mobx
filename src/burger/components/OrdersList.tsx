import React, { useState } from "react";
import { useObserver } from "mobx-react-lite";
import { useStores } from "../StoresProvider";

function OrdersList() {
  const { ordersStore } = useStores();

  return useObserver(() => {
    const { orders } = ordersStore;

    if (!orders.length) {
      return <p>No orders</p>;
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Drink</th>
            <th>Burger</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <thead>
          {orders.map((order, index) => {
            return (
              <tr key={index}>
                <td>{order.drink.displayName}</td>
                <td>{order.burger.displayName}</td>
                <td>{order.totalPrice}</td>
              </tr>
            );
          })}
        </thead>
      </table>
    );
  });
  // return <div></div>;
}

export default OrdersList;
