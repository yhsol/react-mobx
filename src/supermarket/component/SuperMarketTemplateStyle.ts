import styled from "styled-components";

export const S = {
  Wrapper: styled.div`
    width: 768px;
    display: flex;
    border: 1px solid black;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3rem;

    div {
      padding: 0.5rem;
      flex: 1;
    }

    .items-wrapper {
      background: #f8f9fa;
    }
  `,
  H2: styled.h2`
    margin-top: 0;
  `,
  ShopItem: styled.div`
    background: white;
    border: 1px solid #495057;
    padding: 0.5rem;
    border-radius: 2px;
    cursor: pointer;

    h4 {
      margin-top: 0;
      margin-bottom: 1rem;
    }

    &:hover {
      background: #495057;
      color: white;
    }

    & + & {
      margin-top: 1rem;
    }
  `,
  BasketItem: styled.div`
    display: flex;
    width: 100%;

    .name {
      flex: 2;
    }
    .price {
      flex: 1;
    }
    .count {
      flex: 1;
    }
    .return {
      margin-left: auto;
      color: #f06595;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    & + & {
      margin-top: 1rem;
    }
  `,
};
