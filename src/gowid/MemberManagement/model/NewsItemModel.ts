import { observable, action } from "mobx";
import { Hits } from "../types/memberManagement";

export default class NewsItemModel {
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
