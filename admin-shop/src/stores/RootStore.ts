import { RouterStore, ProductStore, AccountStore } from "./index";
import { computed, reaction, when } from "mobx";

export default class RootStore {
  public routerStore: RouterStore;
  public productStore: ProductStore;
  public accountStore: AccountStore;

  constructor(initState?: any) {
    this.accountStore = new AccountStore(this);
    this.routerStore = new RouterStore(this);
    this.productStore = new ProductStore(this);

    reaction(
      () => this.accountStore.admin,
      async (user) => {
        if (user != null) {
          Promise.all([this.productStore.sync()]).then();
        }
      }
    );

    console.log(this);
  }

  @computed get initialized() {
    return this.accountStore.admin != null && this.productStore.initialized;
  }
}
