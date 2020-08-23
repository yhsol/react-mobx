import axios from "axios";
import { memberList } from "../define/testData";
import { memberInfoType } from "../memberManagement";

class MemberManagementRepository {
  URL = "https://hn.algolia.com/api/v1/search";

  constructor(url?: string) {
    this.URL = url || this.URL;
  }

  fetchMemberList(query?: string) {
    // return axios.get(`${this.URL}`)
    return memberList;
  }

  addMember(params?: memberInfoType) {
    return "created";
  }

  deleteMember(id: string) {
    return "deleted";
  }

  fetchData(query?: string) {
    return axios.get(`${this.URL}?query=${query}`);
  }
}

export default new MemberManagementRepository();
