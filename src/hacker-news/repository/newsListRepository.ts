import axios from "axios";

class NewsListRepository {
  URL = "https://hn.algolia.com/api/v1/search";

  constructor(url?: string) {
    this.URL = url || this.URL;
  }

  fetchData(query?: string) {
    return axios.get(`${this.URL}?query=${query}`);
  }
}

export default new NewsListRepository();
