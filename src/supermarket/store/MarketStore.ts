import { observable, action, computed } from "mobx";

type Item = {
  name: string;
  price: number;
  count: number;
};

export default class MarketStore {
  @observable selectedItems: Item[] = [];

  @action
  put = (name: string, price: number) => {
    const exists = this.selectedItems.find((item) => item.name === name);
    if (!exists) {
      this.selectedItems.push({
        name,
        price,
        count: 1,
      });
      return;
    }
    exists.count++;
  };

  @action
  take = (name: string) => {
    const itemToTake = this.selectedItems.find((item) => item.name === name);
    if (itemToTake) {
      itemToTake.count--;
    }
    if (itemToTake && itemToTake.count === 0) {
      this.selectedItems.splice(this.selectedItems.indexOf(itemToTake), 1);
    }
  };

  @computed
  get total() {
    console.log("총합 계산...");
    return this.selectedItems.reduce((previous, current) => {
      return previous + current.count + current.count;
    }, 0);
  }
}
