import { observable, action, runInAction } from "mobx";
import newsListRepository from "../repository/newsListRepository";
import { News } from "../utils/hn-types";

export class NewsStore {
  @observable
  news: News = {
    hits: [],
  };
  @observable
  hits: any = [];

  @observable
  requestState = "pending";

  @action
  fetchData = async (params?: string) => {
    this.requestState = "pending";

    const result = await newsListRepository.fetchData();
    const { data, status } = result;
    console.log(data);

    runInAction(() => {
      this.requestState = `done: ${status}`;
      this.news.hits = data.hits;
      this.hits = data;
    });
  };
}
