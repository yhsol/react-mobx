import {
  observable,
  action,
  runInAction,
  flow,
  configure,
  computed,
} from "mobx";
import newsListRepository from "../repository/newsListRepository";
import { News, Hits } from "../utils/hn-types";
import NewsItemStore from "../entity/newsItemStore";
import autobind from "autobind-decorator";

configure({ enforceActions: "observed" });
console.log("github");

@autobind
export class NewsStore {
  @observable
  news: News = {
    hits: [],
  };
  @observable
  newsItems: News = {
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
        this.newsItems.hits = data.hits.map(
          (item: Hits) =>
            new NewsItemStore({
              objectID: item.objectID,
              title: item.title,
              url: item.url,
            }),
        );
      });
    } catch (error) {
      runInAction(() => {
        console.log(error);
        this.requestState = "error";
      });
    }
  };

  flowFetchData = flow(function* flowFetchData(this: any, query?: string) {
    try {
      this.requestState = "pending";

      const result = yield newsListRepository.fetchData(query);
      const { data, status } = result;

      this.requestState = `done: ${status}`;
      this.news.hits = data.hits;
      this.data = data;
      this.newsItems.hits = data.hits.map(
        (item: Hits) =>
          new NewsItemStore({
            objectID: item.objectID,
            title: item.title,
            url: item.url,
          }),
      );
    } catch (error) {
      console.log(error);
      this.requestState = "error";
    }
  }).bind(this);

  @computed
  get checkedItems(): NewsItemStore[] {
    return this.newsItems.hits.filter((item: NewsItemStore) => item.isChecked);
  }
}
