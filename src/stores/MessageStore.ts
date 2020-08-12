// import { observable, action, computed } from "mobx";
// import RootStore from "./RootStore";

// class MessageStore {
//   rootStore: RootStore;

//   @observable
//   messages = "";
//   @observable
//   limit = 5;

//   constructor(rootStore: RootStore) {
//     this.rootStore = rootStore;
//   }

//   @action
//   setMessages = (messages: string) => {
//     this.messages = messages;
//   };

//   @action
//   setLimit = (limit: number) => {
//     this.limit = limit;
//   };

//   @computed
//   get messageList() {
//     return Object.keys(this.messages || {}).map((key) => ({
//       ...this.messages[parseInt(key)],
//       uid: key,
//     }));
//   }
// }

// export default MessageStore;
const MessageStore = "";
export default MessageStore;
