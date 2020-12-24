import { SettingsStore, RouterStore, ProductStore } from "./index";
import { when } from "mobx";
import AccountStore from "@stores/AccountStore";

export default class RootStore {
  public settingsStore: SettingsStore;
  public routerStore: RouterStore;
  public productStore: ProductStore;
  public accountStore: AccountStore;

  constructor(initState?: any) {
    this.settingsStore = new SettingsStore(this);
    this.routerStore = new RouterStore(this);
    this.productStore = new ProductStore(this);
    this.accountStore = new AccountStore(this);

    when(
      () => this.accountStore.initialized,
      () => Promise.all([this.productStore.sync()]).then()
    );
  }
}
