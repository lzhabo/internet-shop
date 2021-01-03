import { RootStore } from "./index";
import { action, computed, observable } from "mobx";
import { orderService } from "../services";
import { IOrder } from "shop-common/models";
import { notification } from "antd";

export default class OrderStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable initialized = false;
  @observable orders: IOrder[] = [];

  @action getOrderById(id: string) {
    return orderService.order(id);
  }

  @computed get emptyOrderItem() {
    return {
      email: "",
      phone: "",
      createDate: new Date(),
      status: "new",
      firstName: "",
      lastName: "",
      country: "",
      city: "",
      address: "",
      postalCode: "",
      cart: [],
      totalPrice: 0,
      shipping: "default",
    };
  }

  @action add = async (data: IOrder) => {
    try {
      console.log(data);
      const order = await orderService.createOrder(data);
      console.log(order);
      // runInAction(() => this.orders.push(order));
    } catch (e) {
      console.log(e);
      notification.error({ message: e.toString() });
    }
  };
}
