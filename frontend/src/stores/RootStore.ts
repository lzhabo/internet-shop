import { SettingsStore, RouterStore, ProductStore } from "./index";

export default class RootStore {
  public settingsStore: SettingsStore;
  public routerStore: RouterStore;
  public productStore: ProductStore;

  constructor(initState?: any) {
    this.settingsStore = new SettingsStore(this);
    this.routerStore = new RouterStore(this);
    this.productStore = new ProductStore(this);

    Promise.all([this.productStore.sync()]).then();

    console.log(this);
  }
}
