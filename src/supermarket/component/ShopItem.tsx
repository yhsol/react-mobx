import React from "react";
import { S } from "./SuperMarketTemplateStyle";

type ShopItemPropsT = {
  name: string;
  price: number;
  onPut: (name: string, price: number) => void;
};

function ShopItem({ name, price, onPut }: ShopItemPropsT) {
  return (
    <S.ShopItem onClick={() => onPut(name, price)}>
      <h4>{name}</h4>
      <div>{price}원</div>
    </S.ShopItem>
  );
}

export default ShopItem;
