import React, { useEffect, useState } from "react";
import EditPurpose from "./EditPurpose";
import AddPurpose from "./AddPurpose";
import ExpensePolicyModel from "./model/ExpensePolicyModel";
import { useRootStores } from "../../../RootStoresProvider";
import { observer } from "mobx-react-lite";

function PurposeList() {
  const { expensePolicyStore } = useRootStores();
  const {
    expensePolicyList,
    getExpensePolicyList,
    findSelectItem,
    deleteWithId,
  } = expensePolicyStore;

  useEffect(() => {
    getExpensePolicyList();
  }, []);

  const [isEditItem, setIsEditItem] = useState(false);

  function editItem(item: ExpensePolicyModel) {
    findSelectItem(item);
    setIsEditItem(true);
  }

  const border = "1px solid black";

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>사용하실 용도를 선택해 주세요.</div>
        <button onClick={() => setIsEditItem(false)}>추가</button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px",
        }}
      >
        <table
          style={{ border: "1px solid black", width: "500px", height: "500px" }}
        >
          <tbody>
            {expensePolicyList.map((item, index) => (
              <tr key={index}>
                <td style={{ border }}>{item.purpose}</td>
                <td style={{ border }}>{item.category}</td>
                <td style={{ border }}>{item.limit}</td>
                <td>
                  <button
                    onClick={() => deleteWithId(item.purpose)}
                  >{`X`}</button>
                </td>
                <td>
                  <button onClick={() => editItem(item)}>{`>`}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isEditItem ? <EditPurpose /> : <AddPurpose />}
      </div>
    </div>
  );
}

export default observer(PurposeList);
