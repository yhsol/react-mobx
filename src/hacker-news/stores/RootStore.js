import NewsStore from "./newsStore";

class RootStore {
  constructor() {
    this.newsStore = new NewsStore();
  }
}

export default RootStore;
