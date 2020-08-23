import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import PurposeList from "./PurposeList";

enum Tabs {
  PURPOSE_ACCOUNT = "PURPOSE_ACCOUNT",
  SUBBMIT_ADMIT = "SUBBMIT_ADMIT",
}

const ExpensePolicy = observer(() => {
  const [tabs, setTabs] = useState(Tabs.PURPOSE_ACCOUNT);

  return (
    <div>
      <div style={{ margin: "20px" }}>경비처리 정책</div>

      <div style={{ display: "flex" }}>
        <div
          style={{ margin: "20px" }}
          onClick={() => setTabs(Tabs.PURPOSE_ACCOUNT)}
        >
          용도와 계정
        </div>
        <div
          style={{ margin: "20px" }}
          onClick={() => setTabs(Tabs.SUBBMIT_ADMIT)}
        >
          제출과 승인
        </div>
      </div>

      {(() => {
        switch (tabs) {
          case Tabs.PURPOSE_ACCOUNT:
            return <PurposeList />;
          case Tabs.SUBBMIT_ADMIT:
            return "submit and admit";
          default:
            break;
        }
      })()}
    </div>
  );
});

export default ExpensePolicy;
