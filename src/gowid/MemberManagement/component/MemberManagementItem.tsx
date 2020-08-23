import React from "react";
import { observer } from "mobx-react-lite";
import MemberManagementModel from "../model/MemberManagementModel";
import SimpleMenu from "./partial/SimpleMenu";
import { AlertCondition } from "../define/Constants";

function MemberManagementItem({ item }: { item: MemberManagementModel }) {
  return (
    <div>
      <div
        style={{
          border: "1px solid black",
          padding: "20px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>{item.avatar}</div>

          <SimpleMenu
            alertCondition={[
              AlertCondition.EDIT_MEMBER_INFO,
              AlertCondition.TOGGLE_ACTIVCE,
              AlertCondition.DELETE_MEMBER,
            ]}
            memberItem={item}
          />
        </div>
        <div>{item.name}</div>
        <div>
          {item.department} - {item.position}
        </div>
        <div>{item.email}</div>
      </div>
    </div>
  );
}

export default observer(MemberManagementItem);
