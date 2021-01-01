import { observable, action, computed } from "mobx";
import { RootStore } from "@stores/index";
import { persist } from "mobx-persist";

export interface IBasketItem {
  id: string;
  amount: number;
  cost: number;
}

export default class BasketStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @persist("list") @observable basketItems: IBasketItem[] = [];

  @observable initialized = false;

  @computed get totalCost() {
    return this.basketItems.reduce(
      (acc, val) => acc + val.cost * val.amount,
      0
    );
  }

  @action changeAmount = (id: string, quantity: number) => {
    const index = this.basketItems.findIndex((i) => i.id === id);
    this.basketItems[index].amount = quantity;
  };

  @computed get emptyBasketItem() {
    return {
      id: "",
      amount: 0,
      costPerOneItem: 0,
    };
  }

  @action add = (id: string, amount: number, cost: number = 1) => {
    console.log({ id: id, amount: amount, cost: cost });
    const index = this.basketItems.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.basketItems[index].amount = amount;
    } else {
      this.basketItems.push({ id: id, amount: amount, cost: cost });
    }
    console.log("basket items", this.basketItems);
  };

  @action deleteItem = (id: string) => {
    const index = this.basketItems.findIndex((item) => item.id === id);
    this.basketItems.splice(index, 1);
  };
}
