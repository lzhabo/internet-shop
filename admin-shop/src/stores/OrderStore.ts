import { RootStore } from "./index";
import { action, computed, observable, runInAction } from "mobx";
import { orderService } from "../services";
import { IOrder } from "shop-common/models";

export default class OrderStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable initialized = false;
  @observable orders: IOrder[] = [];

  @action sync = async () => {
    const orders = await orderService.orders();
    runInAction(() => {
      this.orders = orders;
      this.initialized = true;
    });
    console.log(this.orders);
  };

  @computed get activeOrder(): IOrder | undefined {
    return this.orders[0] ?? undefined;
  }
}
