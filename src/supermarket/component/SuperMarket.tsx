import React from "react";
import SuperMarketTemplate from "./SuperMarketTemplate";
import ShopItemList from "./ShopItemList";
import BasketItemList from "./BasketItemList";
import TotalPrice from "./TotalPrice";

function SuperMarket() {
  return (
    <div>
      <SuperMarketTemplate
        item={<ShopItemList />}
        basket={<BasketItemList />}
        total={<TotalPrice />}
      />
    </div>
  );
}

export default SuperMarket;
