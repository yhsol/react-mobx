import { observable, action, set } from "mobx";
import autobind from "autobind-decorator";
import { memberInfoType } from "../memberManagement";

@autobind
export default class MemberManagementModel {
  // @observable
  // memberItem: memberInfoType = {
  //   id: "",
  // };
  @observable
  id: string = "";
  @observable
  avatar: string = "";
  @observable
  name: string = "";
  @observable
  department: string = "";
  @observable
  position: string = "";
  @observable
  email: string = "";

  @observable
  isChecked: boolean = false;
  @observable
  isModalOpen: boolean = false;
  @observable
  isTransactionSubmitted: boolean = true;
  @observable
  isActive: boolean = true;

  constructor(memberItem: memberInfoType) {
    // this.memberItem = memberItem;
    set(this, memberItem);
  }

  @action
  onClickCheck() {
    this.isChecked = !this.isChecked;
  }

  @action
  onClickModalOpen() {
    this.isModalOpen = !this.isModalOpen;
  }

  @action
  toggleActive() {
    this.isActive = !this.isActive;
  }
}
