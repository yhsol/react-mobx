import { observable, action } from "mobx";
import RootStore from "./RootStore";
import { User } from "../../types";

import { Session } from "inspector";

class SessionStore {
  rootStore: RootStore;

  @observable
  authUser = {};

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @action
  setAuthUser = (authUser: User) => {
    this.authUser = authUser;
  };
}

export default SessionStore;
// const SessionStore = "";
// export default SessionStore;
