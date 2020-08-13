import { observable, action, runInAction, flow, configure } from "mobx";
import newsListRepository from "../repository/newsListRepository";
import { News } from "../utils/hn-types";
// import autobind from "autobind-decorator";

configure({ enforceActions: "observed" });

// @autobind
export class NewsStore {
  @observable
  news: News = {
    hits: [],
  };
  @observable
  data: any = [];

  @observable
  requestState = "pending";

  @action
  fetchData = async (query?: string) => {
    try {
      this.requestState = "pending";

      const result = await newsListRepository.fetchData(query);
      const { data, status } = result;

      runInAction(() => {
        this.requestState = `done: ${status}`;
        this.news.hits = data.hits;
        this.data = data;
      });
    } catch (error) {
      runInAction(() => {
        console.log(error);
        this.requestState = "error";
      });
    }
  };

  // flowFetchData = flow(function* flowFetchData(query?: string) {
  //   try {
  //     this.requestState = "pending";

  //     const result = yield newsListRepository.fetchData(query);
  //     const { data, status } = result;

  //     this.requestState = `done: ${status}`;
  //     this.news.hits = data.hits;
  //     this.data = data;
  //   } catch (error) {
  //     console.log(error);
  //     this.requestState = "error";
  //   }
  // });
}
