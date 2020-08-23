import React, { useEffect, useState } from "react";
import { useObserver } from "mobx-react-lite";
import { addMemberTest } from "../define/testData";
import SimpleMenu from "./partial/SimpleMenu";
import { AlertCondition } from "../define/Constants";
import FormDialog from "./partial/FormDialog";
import { useRootStores } from "../../../RootStoresProvider";
import MemberManagementModel from "../model/MemberManagementModel";

function MemberManagement() {
  const { memberManagementStore } = useRootStores();
  const { memberList, fetchMemberList, requestState } = memberManagementStore;
  console.log("MemberManagement: ", requestState);

  useEffect(() => {
    fetchMemberList();
  }, [requestState]);

  return useObserver(() => {
    const { memberList, addMember } = memberManagementStore;

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
          {/* <button onClick={() => addMember(addMemberTest)}>멤버 추가</button> */}
          <FormDialog addMember={addMember} />
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
            <div key={index}>
              <div
                style={{
                  border: "1px solid black",
                  padding: "20px",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>{item.memberItem.avatar}</div>

                  <SimpleMenu
                    items={[
                      AlertCondition.EDIT_MEMBER_INFO,
                      AlertCondition.TOGGLE_ACTIVCE,
                      AlertCondition.DELETE_MEMBER,
                    ]}
                    memberInfo={item}
                    memberManagementStore={memberManagementStore}
                  />
                </div>
                <div>{item.memberItem.name}</div>
                <div>
                  {item.memberItem.department} - {item.memberItem.position}
                </div>
                <div>{item.memberItem.email}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  });
}

export default MemberManagement;
