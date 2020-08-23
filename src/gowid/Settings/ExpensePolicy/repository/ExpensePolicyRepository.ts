import axios from "axios";
import { expensePolicyList } from "../testData";
import { ExpenseStateT } from "../define/expensePolicy";

class ExpensePolicyRepository {
  URL = "https://hn.algolia.com/api/v1/search";

  constructor(url?: string) {
    this.URL = url || this.URL;
  }

  getExpensePolicyList(query?: string) {
    // return axios.get(`${this.URL}`)
    return expensePolicyList;
  }

  editExpensePolicyItem(data: ExpenseStateT) {
    return JSON.stringify(data);
    // return axios.post(this.URL, data);
  }

  addMember(params?: ExpenseStateT) {
    return "created";
  }

  deleteWithId(id: string) {
    return "deleted";
  }

  fetchData(query?: string) {
    return axios.get(`${this.URL}?query=${query}`);
  }
}

export default new ExpensePolicyRepository();
