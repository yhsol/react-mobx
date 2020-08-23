import React from "react";
import ShopItem from "./ShopItem";
import { observer } from "mobx-react-lite";
import { useRootStores } from "../../RootStoresProvider";

const items = [
  {
    name: "생수",
    price: 850,
  },
  {
    name: "신라면",
    price: 900,
  },
  {
    name: "포카칩",
    price: 1500,
  },
  {
    name: "새우깡",
    price: 1000,
  },
];

function ShopItemList() {
  const { marketStore } = useRootStores();
  const onPut = marketStore.put;
  const itemList = items.map((item) => (
    <ShopItem {...item} key={item.name} onPut={onPut} />
  ));
  return <div>{itemList}</div>;
}

export default observer(ShopItemList);
