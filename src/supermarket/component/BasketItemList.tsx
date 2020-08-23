import React from "react";
import BasketItem from "./BasketItem";
import { observer } from "mobx-react-lite";
import { useRootStores } from "../../RootStoresProvider";

function BasketItemList() {
  const { marketStore } = useRootStores();
  const { selectedItems, total, take } = marketStore;

  const itemList = selectedItems.map((item) => (
    <BasketItem item={item} key={item.name} onTake={take} />
  ));

  return (
    <div>
      {itemList}
      <hr />
      <p>
        <b>총합: </b> {total}원
      </p>
    </div>
  );
}

export default observer(BasketItemList);
