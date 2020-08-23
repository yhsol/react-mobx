import React from "react";
import ExpensePolicyModel from "./model/ExpensePolicyModel";
import { observer } from "mobx-react-lite";

type PurposeItemPropsT = {
  item: any;
  deleteWithId: (purpose: string) => Promise<void>;
  editItem: (item: ExpensePolicyModel) => void;
};

function PurposeItem({ item, deleteWithId, editItem }: PurposeItemPropsT) {
  const border = "1px solid black";

  console.log("-----PurposeItem");

  return (
    <tr>
      <td style={{ border }}>{item.purpose}</td>
      <td style={{ border }}>{item.category}</td>
      <td style={{ border }}>{item.limit}</td>
      <td>
        <button onClick={() => deleteWithId(item.purpose)}>{`X`}</button>
      </td>
      <td>
        <button onClick={() => editItem(item)}>{`>`}</button>
      </td>
    </tr>
  );
}

export default observer(PurposeItem);
