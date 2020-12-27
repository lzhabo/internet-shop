import { observable, action, computed } from "mobx";
import { RootStore } from "@stores/index";

export interface IBasketItem {
  id: string;
  cost: number;
}

export default class BasketStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable basketItems: IBasketItem[] = [];
  @observable
  initialized = false;

  @computed get totalCost() {
    return this.basketItems.reduce((acc, val) => acc + val.cost, 0);
  }

  @action increaseItem = (id: string, cost: number, count: number = 1) => {
    this.basketItems.push({ id: id, cost: cost });
  };

  @action deleteItem = (id: string) => {
    const index = this.basketItems.findIndex((item) => item.id === id);
    this.basketItems.splice(index, 1);
  };
}
