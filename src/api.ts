import { Product } from "./types";

export const getDrinks = async (): Promise<Product[]> => [
  { name: "drink-test1", displayName: "Drink-Test1", price: 1 },
  { name: "drink-test2", displayName: "Drink-Test2", price: 2 },
  { name: "drink-test3", displayName: "Drink-Test3", price: 3 },
];

export const getBurgers = async (): Promise<Product[]> => [
  { name: "burger-test1", displayName: "Burger-Test1", price: 1 },
  { name: "burger-test2", displayName: "Burger-Test2", price: 2 },
  { name: "burger-test3", displayName: "Burger-Test3", price: 3 },
];
