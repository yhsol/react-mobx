import axios from "axios";

class NewsListRepository {
  URL = "https://hn.algolia.com/api/v1/search?query=mobx";

  constructor(url?: string) {
    this.URL = url || this.URL;
  }

  fetchData() {
    return axios.get(`${this.URL}`);
  }
}

export default new NewsListRepository();
