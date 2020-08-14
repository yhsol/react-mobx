import { observable, action } from "mobx";
import { Hits } from "../utils/hn-types";

export default class NewsItemStore {
  @observable
  newsInfo: Hits = {};
  @observable
  isChecked: boolean = false;

  constructor(newsInfo: Hits) {
    this.newsInfo = newsInfo;
  }

  @action
  onClickCheck = () => {
    this.isChecked = !this.isChecked;
  };
}
