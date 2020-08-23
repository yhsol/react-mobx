import React from "react";
import AlertDialog from "./AlertDialog";
import { AlertCondition } from "../../define/Constants";
import MemberManagementModel from "../../model/MemberManagementModel";
import { MemberManagementStore } from "../../store/MemberManagementStore";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { useRootStores } from "../../../../RootStoresProvider";
import { observer } from "mobx-react-lite";

type simpleMenuPropsT = {
  alertCondition: string[];
  memberItem: MemberManagementModel;
};

function SimpleMenu(simpleMenuProps: simpleMenuPropsT) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const [open, setOpen] = React.useState(false);

  const { memberManagementStore } = useRootStores();
  const { alertCondition, memberItem } = simpleMenuProps;

  // TODO: alertItem 을 기반으로 작업 분기. 관리 주의 필요
  const [alertItem, setAlertItem] = React.useState("");
  const [beforeAlertItem, setBeforeAlertItem] = React.useState("");
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [isEditComplete, setIsEditComplete] = React.useState(false);

  // open dialog
  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

  // close dialog
  function handleClose() {
    setAnchorEl(null);
  }

  // open alert & change alert item
  function handleAlertOpen(item: string) {
    setAlertItem(item);
    // setOpen(true);
    setAlertOpen(true);
    if (alertItem !== AlertCondition.INCOMPLETE_SUBMIT) {
      setBeforeAlertItem(item);
    }

    setAnchorEl(null);
  }

  // close alert
  function handleAlertClose() {
    setAlertOpen(false);
  }

  // 취소 버튼
  function onClickAlertCancel() {
    setAlertOpen(false);
    if (isEditComplete === false) {
      setAlertItem(AlertCondition.INCOMPLETE_EDIT);
      setAlertOpen(true);
    }
  }

  // 확인 버튼
  function onClickAlertConfirm() {
    alert("click buttonConfirmText");
    setAlertOpen(false);

    if (memberItem.isTransactionSubmitted === false) {
      setAlertItem(AlertCondition.INCOMPLETE_SUBMIT);
      setAlertOpen(true);
      return;
    }
  }

  // 지출 내역 상태 확인
  function checkSubmitComplete() {
    if (memberItem.isTransactionSubmitted === false) {
      setAlertItem(AlertCondition.INCOMPLETE_SUBMIT);
      setAlertOpen(true);
      return false;
    }
    return true;
  }

  // 활성 / 비활성 토글
  function onClickToggleActive() {
    setAlertOpen(false);
    if (checkSubmitComplete() === false) return;

    alert("비활성 요청");
    memberItem.toggleActive();
  }

  // 멤버 삭제
  function onClickDeleteMember(id: string) {
    setAlertOpen(false);
    if (checkSubmitComplete() === false) return;

    alert("삭제 요청");
    memberManagementStore.deleteMember(id);
  }

  // "돌아가기" 클릭시
  function handleAlertBack() {
    setAlertOpen(false);
    setAlertItem(beforeAlertItem);
    setAlertOpen(true);
  }

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        ℹ️
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* Dialog Items */}
        {alertCondition.map((item: string, index: any) => (
          <MenuItem key={index} onClick={() => handleAlertOpen(item)}>
            {item === AlertCondition.EDIT_MEMBER_INFO ? (
              <div style={{ color: "gray" }}>정보 수정</div>
            ) : (
              item
            )}
          </MenuItem>
        ))}

        {/* Alert Items */}
        {alertOpen &&
          (() => {
            switch (alertItem) {
              case AlertCondition.TOGGLE_ACTIVCE:
                return (
                  <AlertDialog
                    openFl={alertOpen}
                    title={`${memberItem.name} 비활성 처리할까요?`}
                    message={`비활성 요청`}
                    buttonConfirmText={"네, 비활성 할래요"}
                    handleAlertClose={handleAlertClose}
                    onClickAlertCancel={onClickAlertCancel}
                    onClickAlertConfirm={() => onClickToggleActive()}
                  />
                );
              case AlertCondition.DELETE_MEMBER:
                return (
                  <AlertDialog
                    openFl={alertOpen}
                    title={`'${memberItem.name}님을 멤버 목록에서 삭제할까요?`}
                    message={`삭제 요청`}
                    buttonConfirmText={"네, 삭제할래요"}
                    handleAlertClose={handleAlertClose}
                    onClickAlertCancel={onClickAlertCancel}
                    onClickAlertConfirm={() =>
                      onClickDeleteMember(memberItem.id)
                    }
                  />
                );
              case AlertCondition.INCOMPLETE_SUBMIT:
                return (
                  <AlertDialog
                    openFl={alertOpen}
                    title={`아직 제출하지 않은 거래내역이 있어요.`}
                    message={`미지출 메시지`}
                    buttonConfirmText={"확인"}
                    handleAlertClose={handleAlertClose}
                    onClickAlertConfirm={onClickAlertCancel}
                  />
                );
              case AlertCondition.INCOMPLETE_EDIT:
                return (
                  <AlertDialog
                    openFl={alertOpen}
                    title={`멤버 정보 수정을 취소하시면 작성하신 내용이 저장되지 않아요. 그래도 취소할까요?`}
                    message={``}
                    buttonCancelText={`돌아가기`}
                    buttonConfirmText={"취소할래요"}
                    handleAlertClose={handleAlertClose}
                    onClickAlertCancel={handleAlertBack}
                    onClickAlertConfirm={handleAlertClose}
                  />
                );
              default:
                return null;
            }
          })()}
      </Menu>
    </div>
  );
}

export default observer(SimpleMenu);
