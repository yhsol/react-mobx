import {
  observable,
  action,
  runInAction,
  flow,
  configure,
  computed,
} from "mobx";
import autobind from "autobind-decorator";
import ExpensePolicyManagementRepository from "../repository/ExpensePolicyRepository";
import ExpensePolicyRepository from "../repository/ExpensePolicyRepository";
import ExpensePolicyModel from "../model/ExpensePolicyModel";
import { ExpenseStateT } from "../define/expensePolicy";

configure({ enforceActions: "observed" });

@autobind
export class ExpensePolicyStore {
  @observable
  requestState = "pending";

  @observable
  expensePolicyList: ExpensePolicyModel[] = [];

  @observable
  selectedItem: ExpensePolicyModel | undefined = undefined;

  @action
  findSelectItem = (expensePolicyItem: ExpensePolicyModel) => {
    this.selectedItem = this.expensePolicyList.find(
      (item) => item === expensePolicyItem
    );
  };

  @action
  deleteWithId = async (purpose: string) => {
    try {
      this.requestState = "pending";
      const res = await ExpensePolicyRepository.deleteWithId(purpose);
      runInAction(() => {
        if (res !== "") {
          this.expensePolicyList = this.expensePolicyList.filter(
            (item: ExpensePolicyModel) => item.purpose !== purpose
          );
        }
      });
    } catch (error) {
      console.log(error);
      this.requestState = "error";
    }
  };

  @action
  getExpensePolicyList = async (query?: string) => {
    try {
      this.requestState = "pending";
      const res = await ExpensePolicyManagementRepository.getExpensePolicyList(
        query
      );

      runInAction(() => {
        this.requestState = "done";
        this.expensePolicyList = res.map(
          (item: ExpenseStateT) => new ExpensePolicyModel(item)
        );
      });
    } catch (error) {
      console.log(error);
      this.requestState = "error";
    }
  };
}
