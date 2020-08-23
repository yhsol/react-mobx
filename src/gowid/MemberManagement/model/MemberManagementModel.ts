import { observable, action } from "mobx";
import autobind from "autobind-decorator";
import { memberInfoType } from "../memberManagement";

@autobind
export default class MemberManagementModel {
  @observable
  memberItem: memberInfoType = {
    id: "",
  };
  @observable
  isChecked: boolean = false;
  @observable
  isModalOpen: boolean = false;
  @observable
  isTransactionSubmitted: boolean = true;
  @observable
  isActive: boolean = true;

  constructor(memberItem: memberInfoType) {
    this.memberItem = memberItem;
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
