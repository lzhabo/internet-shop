import { firebaseService } from "@services";
import { observable } from "mobx";
import { RootStore } from "@stores/index";

export default class AccountStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    firebaseService.auth.signInAnonymously();
    firebaseService.auth.onAuthStateChanged((user) => {
      if (user) {
        this.initialized = true;
      } else {
        // this.initialized = true;
        // firebaseService.auth.signInAnonymously();
      }
    });
  }

  @observable
  initialized = false;
}
