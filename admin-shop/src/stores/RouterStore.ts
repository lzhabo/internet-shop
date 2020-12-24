import { RootStore } from "./index";
import { createBrowserHistory } from "history";
import { reaction } from "mobx";

export enum ROUTES {
  ROOT = "/",
  PRODUCTS = "/products",
  EDIT = "/product/:id",
  NEW = "/new",
  REGISTER = "/registration",
  LOGIN = "/login",
}

export default class RouterStore {
  public rootStore: RootStore;
  public history = createBrowserHistory();

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    reaction(
      () => this.rootStore.accountStore.admin,
      (user) => {
        if (user == null) {
          this.history.replace(ROUTES.LOGIN);
        }
      }
    );

    reaction(
      () => this.rootStore.initialized,
      (v) => {
        console.log("initialized reaction", v);
        if (v) {
          this.history.replace(
            (this.history.location?.state as any)?.from ?? ROUTES.ROOT
          );
        }
      }
    );
  }
}
