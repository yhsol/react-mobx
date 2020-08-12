import React, { useRef, useEffect } from "react";
import { useStores } from "../StoresProvider";
import { useObserver } from "mobx-react-lite";

function OrderForm() {
  const drinkRef = useRef<HTMLSelectElement>(null);
  const burgerRef = useRef<HTMLSelectElement>(null);

  const { productsStore, ordersStore } = useStores();
  const { fetchProducts } = productsStore;
  const { addOrder } = ordersStore;

  useEffect(() => {
    fetchProducts();
  }, []);

  const onSubmit = function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addOrder(drinkRef.current?.value || "", burgerRef.current?.value || "");
  };

  return useObserver(() => {
    const { isLoading, drinks, burgers } = productsStore;

    if (isLoading) {
      return <>Loading...</>;
    }

    return (
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>Make an Order</legend>
          <label htmlFor="drink">Drink</label>
          <select name="drink" id="drink" ref={drinkRef}>
            {drinks.map((drink) => (
              <option value={drink.name} key={drink.name}>
                {drink.displayName} = ${drink.price}
              </option>
            ))}
          </select>
          <select name="burger" id="burger" ref={burgerRef}>
            {burgers.map((burger) => (
              <option value={burger.name} key={burger.name}>
                {burger.displayName} - ${burger.price}
              </option>
            ))}
          </select>
          <button>Submit</button>
        </fieldset>
      </form>
    );
  });
}

export default OrderForm;
