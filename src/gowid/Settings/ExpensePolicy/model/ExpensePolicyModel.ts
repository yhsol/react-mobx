import { observable, action, set } from "mobx";
import autobind from "autobind-decorator";
import { ExpenseStateT } from "../define/expensePolicy";

@autobind
export default class ExpensePolicyModel {
  // cardItem
  @observable
  purpose: string = "";
  @observable
  category: string = "";
  @observable
  limit: string = "";

  @observable
  tempExpenseState: ExpenseStateT = {
    purpose: "",
    category: "",
    limit: "",
  };

  @observable
  requestState = "pending";
  @observable
  responseData = "";
  @observable
  isChecked: boolean = false;

  constructor(expensePolicyItem: ExpenseStateT) {
    set(this, expensePolicyItem);
    set(this.tempExpenseState, expensePolicyItem);
  }

  @action
  changeExpensePolicyItem(e: React.ChangeEvent<any>) {
    const { name, value }: { name: string; value: any } = e.target;
    this.tempExpenseState[name] = value;
  }

  @action
  editExpensePolicyItem() {
    try {
      this.requestState = "done";
      set(this, this.tempExpenseState);
      // api 요청 - user, byname, allowedList
      // tempExpenseState 에서 꺼내서 api 요청 보내고, 응답값으로 set() 하거나,
      // 아니면 db 에 수정된 값을 읽어올테니 따로 작업을 안해줘도 될 듯.
      // CardManagementRepository.editCardInfo(this.tempExpenseState);
      // this.responseData = CardManagementRepository.editCardInfo(this.tempExpenseState);
    } catch (error) {
      console.log(error);
      this.requestState = "error";
    }
  }

  @action
  onClickCheck() {
    this.isChecked = !this.isChecked;
  }
}
