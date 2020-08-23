import React from "react";
import { S } from "./SuperMarketTemplateStyle";
import { observer } from "mobx-react-lite";

type BaskItemPropsT = {
  item: {
    name: string;
    price: number;
    count: number;
  };
  onTake: any;
};

function BasketItem({ item, onTake }: BaskItemPropsT) {
  const { name, price, count } = item;
  return (
    <S.BasketItem>
      <div className="name">{name}</div>
      <div className="price">{price}</div>
      <div className="count">{count}</div>
      <div className="return" onClick={() => onTake(name)}>
        갖다놓기
      </div>
    </S.BasketItem>
  );
}

export default observer(BasketItem);
