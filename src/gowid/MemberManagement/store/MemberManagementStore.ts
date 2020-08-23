import {
  observable,
  action,
  runInAction,
  flow,
  configure,
  computed,
} from "mobx";
import autobind from "autobind-decorator";
import MemberManagementRepository from "../repository/MemberManagementRepository";
import MemberManagementModel from "../model/MemberManagementModel";
import { memberInfoType } from "../memberManagement";
import { Hits } from "../../../hacker-news/utils/hn-types";
// import NewsItemModel from "../model/NewsItemModel";

configure({ enforceActions: "observed" });

@autobind
export class MemberManagementStore {
  @observable
  news: any = {
    hits: [],
  };
  @observable
  newsItems: any = {
    hits: [],
  };
  @observable
  data: any = [];

  @observable
  requestState = "pending";

  @observable
  memberList: MemberManagementModel[] = [];

  @action
  fetchMemberList = async (query?: string) => {
    try {
      this.requestState = "pending";
      const res = await MemberManagementRepository.fetchMemberList(query);

      runInAction(() => {
        this.requestState = "done";
        this.memberList = res.map(
          (item: memberInfoType) =>
            new MemberManagementModel({
              id: item.id,
              avatar: item.avatar,
              name: item.name,
              department: item.department,
              position: item.position,
              email: item.email,
            })
        );
      });
    } catch (error) {
      console.log(error);
      this.requestState = "error";
    }
  };

  @action
  addMember = async (params: memberInfoType) => {
    try {
      this.requestState = "pending";
      const res = await MemberManagementRepository.addMember(params);

      runInAction(() => {
        // TODO: 아래 로직은 테스트
        // 실제로는 post 요청을 보내면 memberList 를 읽을 때 반영되어있어야 함.
        if (res !== "") {
          this.memberList.unshift(new MemberManagementModel(params));
        }
        this.requestState = "done";
      });
    } catch (error) {
      console.log(error);
      this.requestState = "error";
    }
  };

  @action
  deleteMember = async (id: string) => {
    try {
      this.requestState = "pending";
      const res = await MemberManagementRepository.deleteMember(id);
      runInAction(() => {
        // TODO: 아래 로직은 추후 api 가 완성되면 백엔드에서 작업
        // 프론트에서는 변경된 리스트를 호출해서 사용하면 될 듯.
        // if (res !== "") {
        //   this.memberList = this.memberList.filter(
        //     (item: MemberManagementModel) => item.memberItem.id !== id
        //   );
        // }
        const itemToDelete = this.memberList.find((item) => item.id === id);
        if (res && itemToDelete) {
          return this.memberList.splice(
            this.memberList.indexOf(itemToDelete),
            1
          );
        }
        this.requestState = "done";
      });
    } catch (error) {
      console.log(error);
      this.requestState = "error";
    }
  };

  // @action
  // fetchData = async (query?: string) => {
  //   try {
  //     this.requestState = "pending";

  //     const res = await MemberManagementRepository.fetchData(query);
  //     const { data, status } = res;

  //     runInAction(() => {
  //       this.requestState = `done: ${status}`;
  //       this.newsItems.hits = data.hits.map(
  //         (item: Hits) =>
  //           new NewsItemModel({
  //             objectID: item.objectID,
  //             title: item.title,
  //             url: item.url,
  //           })
  //       );
  //     });
  //   } catch (error) {
  //     runInAction(() => {
  //       console.log(error);
  //       this.requestState = "error";
  //     });
  //   }
  // };

  @computed
  get checkedItems(): MemberManagementModel[] {
    return this.newsItems.hits.filter(
      (item: MemberManagementModel) => item.isChecked
    );
  }
}
