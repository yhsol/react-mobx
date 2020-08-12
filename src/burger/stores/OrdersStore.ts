import { observable, action } from "mobx";
import { ProductsStore } from "./ProductsStore";
import { Product } from "../../types";

type Order = {
  drink: Product;
  burger: Product;
  totalPrice: number;
};

export class OrdersStore {
  constructor(private productsStore: ProductsStore) {}

  @observable
  orders: Order[] = [];

  @action
  addOrder = (drinkName: string, burgerName: string) => {
    const drink = this.productsStore.drinks.find((d) => d.name === drinkName);
    const burger = this.productsStore.burgers.find(
      (d) => d.name === burgerName,
    );
    console.log("drink: ", drink, "burger: ", burger);

    if (!drink || !burger) {
      return;
    }
    const totalPrice = drink.price + burger.price;
    this.orders.push({
      drink,
      burger,
      totalPrice,
    });
    console.log("this.orders: ", this.orders);
  };
}
