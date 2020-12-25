import { SettingsStore, RouterStore, ProductStore } from "./index";
import { when, reaction } from "mobx";
import AccountStore from "@stores/AccountStore";

export default class RootStore {
  public settingsStore: SettingsStore;
  public routerStore: RouterStore;
  public productStore: ProductStore;
  public accountStore: AccountStore;

  constructor(initState?: any) {
    this.settingsStore = new SettingsStore(this);
    this.accountStore = new AccountStore(this);
    this.productStore = new ProductStore(this);
    this.routerStore = new RouterStore(this);
    console.log("RootStore constructor ", this.productStore.products);

    when(
      () => this.accountStore.initialized,
      () => Promise.all([this.productStore.sync()]).then()
    );
  }
}
