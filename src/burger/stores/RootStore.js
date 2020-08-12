import SessionStore from "./SessionStore";
import UserStore from "./UserStore";
import MessageStore from "./MessageStore";
import { ProductsStore } from "./ProductsStore";
import { OrdersStore } from "./OrdersStore";

class RootStore {
  constructor() {
    // this.sessionStore = new SessionStore(this);
    // this.userStore = new UserStore(this);
    // this.messageStore = new MessageStore(this);
    this.productsStore = new ProductsStore();
    this.ordersStore = new OrdersStore(this.productStore);
  }
}

// const RootStoreProvider = new RootStore();
export default RootStore;
