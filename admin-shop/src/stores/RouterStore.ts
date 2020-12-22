import { RootStore } from "./index";
import { createBrowserHistory, Location } from "history";
import { observable, runInAction, reaction } from "mobx";

export enum ROUTES {
  ROOT = "/",
  PRODUCTS = "/products",
  NEW = "/new",
  REGISTER = "/registration",
  LOGIN = "/login",
}

export default class RouterStore {
  public rootStore: RootStore;
  public history = createBrowserHistory();

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    // this.history.listen((location, action) => {
    //   this.sync(location);
    // });
    // this.sync(this.history.location);
    reaction(
      () => this.rootStore.accountStore.admin,
      (user) => {
        if (user == null) {
          this.history.replace(ROUTES.LOGIN);
        }
      }
    );
  }
  // reaction(
  //     () => this.rootStore.initialized,
  //     (v) => {
  //         if (v) {
  //             this.history.replace(
  //                 (this.history.location?.state as any)?.from ?? {
  //                     pathname: /${this.rootStore.pageStore.pages[0].lang}${ROUTES.START_PAGE},
  //                 }
  //             );
  //         }
  //     }
  // );
}
