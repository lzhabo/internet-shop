import { RouterStore, ProductStore, AccountStore, OrderStore } from "./index";
import { computed, reaction } from "mobx";

export default class RootStore {
  public routerStore: RouterStore;
  public productStore: ProductStore;
  public accountStore: AccountStore;
  public orderStore: OrderStore;

  constructor(initState?: any) {
    this.accountStore = new AccountStore(this);
    this.routerStore = new RouterStore(this);
    this.productStore = new ProductStore(this);
    this.orderStore = new OrderStore(this);

    reaction(
      () => this.accountStore.admin,
      async (user) => {
        if (user != null) {
          Promise.all([this.productStore.sync()]).then();
          Promise.all([this.orderStore.sync()]).then();
        }
      }
    );

    console.log(this);
  }

  @computed get initialized() {
    return this.accountStore.admin != null && this.productStore.initialized;
  }
}
