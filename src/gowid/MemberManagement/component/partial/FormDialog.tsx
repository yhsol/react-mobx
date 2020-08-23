import React, { useState, useRef } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";
import { AlertCondition } from "../../define/Constants";
import { memberInfoType } from "../../memberManagement";
import { observer } from "mobx-react-lite";
import { useRootStores } from "../../../../RootStoresProvider";

// TODO:
// - input: 따로 유효성 검사에 따른 액션을 하기위해 required 가 아니라 따로 체크하고 액션을 줘야할 듯.
// 같은 이유로 email 도 타입을 변경하거나 해야할 수도 있겠다.

// - create: 생성시에 클라이언트에서 id를 지정하지 않고, avatar 역시 여기서 지정하지 않기때문에 create member 의 타입이 따로 있어야 할 듯.

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

type FormDialogT = {
  addMember: (params: memberInfoType) => Promise<void>;
};

function FormDialog() {
  const classes = useStyles();
  const { memberManagementStore } = useRootStores();
  const { addMember } = memberManagementStore;

  const initialMemberInfo = {
    id: "createID",
    avatar: "createAvatar",
    name: "",
    email: "",
    department: "",
    position: "",
  };

  // state
  const [open, setOpen] = useState(false);
  const [memberInfo, setMemberInfo] = useState<memberInfoType>(
    initialMemberInfo
  );
  const [alertItem, setAlertItem] = React.useState("");
  const [beforeAlertItem, setBeforeAlertItem] = React.useState("");

  // ref for input
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const departmentRef = useRef<HTMLSelectElement>(null);
  const positionRef = useRef<HTMLSelectElement>(null);

  const handleChange = (
    event: React.ChangeEvent<{ value: unknown; name?: any }>
  ) => {
    setMemberInfo({
      ...memberInfo,
      [event.target.name]: event.target.value as string,
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
    setAlertItem(AlertCondition.CREATE_MEMBER);
    setMemberInfo(initialMemberInfo);
  };

  const handleCloseCheck = () => {
    setOpen(false);
    if (alertItem !== AlertCondition.CREATE_COMPLETE) {
      setBeforeAlertItem(alertItem);
      setAlertItem(AlertCondition.INCOMPLETE_EDIT);
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setMemberInfo(initialMemberInfo);
    setAlertItem("");
  };

  function validationCheck() {
    if (memberInfo.name === "") {
      alert("이름을 입력해 주세요.");
      if (!nameRef.current) {
        return;
      }
      nameRef.current.focus();
      return false;
    }
    if (memberInfo.email === "") {
      alert("이메일 입력해 주세요.");
      if (!emailRef.current) {
        return;
      }
      emailRef.current.focus();
      return false;
    }
    if (memberInfo.department === "") {
      alert("부서를 선택해 주세요.");
      if (!departmentRef.current) {
        return;
      }
      departmentRef.current.focus();
      return false;
    }
    if (memberInfo.position === "") {
      alert("직급을 선택해 주세요.");
      if (!positionRef.current) {
        return;
      }
      positionRef.current.focus();
      return false;
    }

    return true;
  }

  function onClickAddMember(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (validationCheck() === false) return;

    addMember(memberInfo);

    setMemberInfo(initialMemberInfo);

    alert("생성되었습니다!");
    setOpen(false);

    setOpen(true);
    setAlertItem(AlertCondition.CREATE_COMPLETE);
  }

  function handleAlertBack() {
    setOpen(false);
    setAlertItem(beforeAlertItem);
    setOpen(true);
  }

  console.log("-----form dialog: ", memberInfo);

  return (
    <div>
      <button onClick={handleClickOpen}>멤버추가</button>
      {open &&
        (() => {
          switch (alertItem) {
            case AlertCondition.CREATE_MEMBER:
              return (
                <Dialog
                  open={open}
                  onClose={handleCloseCheck}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title">
                    추가하려는 멤버의 정보를 입력해주세요.
                  </DialogTitle>
                  <DialogContent
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "300px",
                    }}
                  >
                    <form
                      action=""
                      onSubmit={onClickAddMember}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "300px",
                      }}
                    >
                      <label htmlFor="member-name">이름</label>
                      <input
                        name="name"
                        value={memberInfo.name}
                        onChange={handleChange}
                        ref={nameRef}
                        //   required
                      />
                      <label htmlFor="member-email">이메일</label>
                      <input
                        name="email"
                        type="email"
                        value={memberInfo.email}
                        onChange={handleChange}
                        ref={emailRef}
                        //   required
                      />
                      <label htmlFor="member-department">부서</label>
                      <select
                        name="department"
                        id="department"
                        onChange={handleChange}
                        value={memberInfo.department}
                        ref={departmentRef}
                        //   required
                      >
                        <option value="none">선택안함</option>
                        <option value="department1">department1</option>
                        <option value="department2">department2</option>
                        <option value="department3">department3</option>
                      </select>
                      <label htmlFor="member-position">직급</label>
                      <select
                        name="position"
                        id="position"
                        onChange={handleChange}
                        value={memberInfo.position}
                        ref={positionRef}
                        //   required
                      >
                        <option value="none">선택안함</option>
                        <option value="position1">position1</option>
                        <option value="position2">position2</option>
                        <option value="position3">position3</option>
                      </select>

                      <div>
                        <button type="submit">추가하기</button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              );
            case AlertCondition.CREATE_COMPLETE:
              return (
                <Dialog
                  open={open}
                  onClose={handleCloseCheck}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title">
                    <span>{memberManagementStore.memberList[0].name}</span>
                    님이 새 멤버로 추가됐어요! 법인카드 사용자로 지정하시겠어요?
                  </DialogTitle>
                  <DialogContent
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "300px",
                    }}
                  >
                    <div>
                      {`환영의 의미로 새 멤버에게 법인카드를 부여하고 우리 회사에 대한 소속감을
                        만들어주세요 :)`}
                    </div>

                    <div>
                      <button>다음에 하기</button>
                      <button>카드 사용자로 지정</button>
                    </div>
                  </DialogContent>
                </Dialog>
              );
            case AlertCondition.INCOMPLETE_EDIT:
              return (
                <Dialog
                  open={open}
                  onClose={handleCloseCheck}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title">
                    새 멤버 추가를 취소하시면 작성하신 내용이 저장되지 않아요.
                    그래도 취소할까요?{" "}
                  </DialogTitle>
                  <DialogContent
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "300px",
                    }}
                  >
                    <div>
                      <button onClick={handleAlertBack}>돌아가기</button>
                      <button onClick={handleClose}>취소할래요</button>
                    </div>
                  </DialogContent>
                </Dialog>
              );
          }
        })()}
    </div>
  );
}

export default observer(FormDialog);
