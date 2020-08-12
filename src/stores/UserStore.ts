import { observable, action, computed } from "mobx";
import RootStore from "./RootStore";
import { User, userInfo } from "../types";

class UserStore {
  rootStore: RootStore;

  @observable
  users: User = {} as User;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @action
  setUsers = (users: User) => {
    this.users = users;
  };

  @action
  setUser = (user: userInfo, uid: number) => {
    if (!this.users) {
      this.users = {};
    }

    this.users[uid] = user;
  };

  @computed
  get userList() {
    return Object.keys(this.users).map((key) => {
      const test = parseInt(key);
      return ({
        ...this.users[test],
        uid: key,
      });
    });
  }
}

export default UserStore;
// const UserStore = "";
// export default UserStore;
