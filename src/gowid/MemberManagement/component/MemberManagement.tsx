import React, { useEffect, useState } from "react";
import { useObserver, observer } from "mobx-react-lite";
import { addMemberTest } from "../define/testData";
import SimpleMenu from "./partial/SimpleMenu";
import { AlertCondition } from "../define/Constants";
import FormDialog from "./partial/FormDialog";
import { useRootStores } from "../../../RootStoresProvider";
import MemberManagementModel from "../model/MemberManagementModel";
import MemberManagementItem from "./MemberManagementItem";

function MemberManagement() {
  const { memberManagementStore } = useRootStores();
  const { memberList, fetchMemberList, addMember } = memberManagementStore;

  useEffect(() => {
    fetchMemberList();
  }, []);

  return (
    <div>
      <div style={{ margin: "20px" }}>멤버 및 권한 관리</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px",
        }}
      >
        <div>전체 46</div>
        <FormDialog />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
          margin: "20px",
        }}
      >
        {memberList.map((item: MemberManagementModel, index: any) => (
          <MemberManagementItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default observer(MemberManagement);
