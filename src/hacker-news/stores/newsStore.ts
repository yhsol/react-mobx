import { observable, action, runInAction } from "mobx";
import newsListRepository from "../repository/newsListRepository";
import { News } from "../utils/hn-types";

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
    this.requestState = "pending";

    const result = await newsListRepository.fetchData(query);
    const { data, status } = result;

    runInAction(() => {
      this.requestState = `done: ${status}`;
      this.news.hits = data.hits;
      this.data = data;
    });
  };
}
