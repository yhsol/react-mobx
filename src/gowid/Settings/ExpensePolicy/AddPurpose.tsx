import React from "react";
import { observer } from "mobx-react-lite";
import { useRootStores } from "../../../RootStoresProvider";
import { categoryList } from "./testData";

function AddPurpose() {
  const { expensePolicyStore } = useRootStores();
  const { selectedItem } = expensePolicyStore;

  console.log("responseData: ", selectedItem?.responseData);

  function onChange(e: React.ChangeEvent<any>) {
    selectedItem?.changeExpensePolicyItem(e);
  }

  console.log(selectedItem?.purpose);

  return (
    <div style={{ border: "1px solid black", width: "300px", height: "350px" }}>
      <div>용도를 추가할까요?</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <input
          type="text"
          name="purpose"
          // value={selectedItem?.tempExpenseState?.purpose || ''}
          onChange={onChange}
        />

        <select
          name="category"
          id="category"
          // defaultValue="none"
          // defaultValue={selectedItem?.category}
          // value={selectedItem?.tempExpenseState?.category}
          style={{ margin: "20px", width: "153px" }}
          onChange={selectedItem?.changeExpensePolicyItem}
        >
          <option value="none">선택해주세요.</option>
          {categoryList.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="limit"
          // value={selectedItem?.tempExpenseState?.limit || ''}
          onChange={onChange}
        />

        <button onClick={selectedItem?.editExpensePolicyItem}>용도 추가</button>
      </div>
    </div>
  );
}

export default observer(AddPurpose);
