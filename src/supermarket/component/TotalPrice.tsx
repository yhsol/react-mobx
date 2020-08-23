import React from "react";
import { observer } from "mobx-react-lite";
import { useRootStores } from "../../RootStoresProvider";

function TotalPrice() {
  const { marketStore } = useRootStores();
  const { total } = marketStore;
  return (
    <div>
      <hr />
      <p>
        <b>총합: </b> {total}원
      </p>
    </div>
  );
}

export default observer(TotalPrice);
