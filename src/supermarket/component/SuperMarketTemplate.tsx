import React from "react";
import { S } from "./SuperMarketTemplateStyle";

type SuperMarketPropsT = {
  item: JSX.Element;
  basket: JSX.Element;
  total: JSX.Element;
};

function SuperMarketTemplate({ item, basket, total }: SuperMarketPropsT) {
  return (
    <S.Wrapper>
      <div className="items-wrapper">
        <S.H2>상품</S.H2>
        {item}
      </div>
      <div className="basket-wrapper">
        <S.H2>장바구니</S.H2>
        {basket}
        {total}
      </div>
    </S.Wrapper>
  );
}

export default SuperMarketTemplate;
