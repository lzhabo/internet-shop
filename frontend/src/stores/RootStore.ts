import {
  SettingsStore,
  RouterStore,
  ProductStore,
  AccountStore,
  BasketStore,
} from "./index";
import { when } from "mobx";

export default class RootStore {
  public settingsStore: SettingsStore;
  public routerStore: RouterStore;
  public productStore: ProductStore;
  public accountStore: AccountStore;
  public basketStore: BasketStore;

  constructor(initState?: any) {
    this.settingsStore = new SettingsStore(this);
    this.accountStore = new AccountStore(this);
    this.productStore = new ProductStore(this);
    this.routerStore = new RouterStore(this);
    this.basketStore = new BasketStore(this);
    console.log(this);
    when(
      () => this.accountStore.initialized,
      () => Promise.all([this.productStore.sync()]).then()
    );
  }
}
