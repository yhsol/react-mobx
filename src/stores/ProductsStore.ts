import { observable, action, runInAction } from "mobx";
import { getBurgers, getDrinks } from "../api";
import { Product } from "../types";

export class ProductsStore {
  @observable drinks: Product[] = [];
  @observable burgers: Product[] = [];

  @observable isLoading: boolean = true;

  @action
  fetchProducts = async () => {
    const drinks = await getDrinks();
    const burgers = await getBurgers();
    runInAction(() => {
      this.drinks = drinks;
      this.burgers = burgers;
      this.isLoading = false;
    });
  };
}
