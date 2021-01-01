import {
  SettingsStore,
  RouterStore,
  ProductStore,
  AccountStore,
  BasketStore,
  OrderStore,
} from "./index";
import { when } from "mobx";
import { create } from "mobx-persist";

const hydrate = create({
  storage: localStorage,
  jsonify: true,
});
export default class RootStore {
  public settingsStore: SettingsStore;
  public routerStore: RouterStore;
  public productStore: ProductStore;
  public accountStore: AccountStore;
  public basketStore: BasketStore;
  public orderStore: OrderStore;

  constructor() {
    this.settingsStore = new SettingsStore(this);
    this.accountStore = new AccountStore(this);
    this.productStore = new ProductStore(this);
    this.routerStore = new RouterStore(this);
    this.basketStore = new BasketStore(this);
    this.orderStore = new OrderStore(this);

    when(
      () => this.accountStore.initialized,
      () => {
        Promise.all([this.productStore.sync()]).then();
      }
    );

    hydrate("basketStore", this.basketStore);
    console.log(this);
  }

  public serialize = () => ({
    basketStore: { basketItems: this.basketStore.basketItems },
  });
}
