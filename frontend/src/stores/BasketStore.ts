import { observable, action, computed } from "mobx";
import { RootStore } from "@stores/index";
import { persist } from "mobx-persist";

export interface IBasketItem {
  id: string;
  amount: number;
}

export default class BasketStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore, initState?: any) {
    this.rootStore = rootStore;
  }

  @persist("list") @observable basketItems: IBasketItem[] = [];

  // @computed get totalCost() {
  //   return this.basketItems.reduce(
  //     (acc, val) => acc + val.costPerOneItem * val.amount,
  //     0
  //   );
  // }

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

  @action
  add = (v: IBasketItem) => {
    console.log(v);
    const index = this.basketItems.findIndex((item) => item.id === v.id);
    if (index !== -1) {
      this.basketItems[index].amount = v.amount;
    } else {
      this.basketItems.push(v);
    }
    console.log("basket items", this.basketItems);
  };

  @action deleteItem = (id: string) => {
    const index = this.basketItems.findIndex((item) => item.id === id);
    this.basketItems.splice(index, 1);
  };
}
