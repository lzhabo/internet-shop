import { firebaseService } from "@services";
import { observable } from "mobx";

export default class AccountStore {
  constructor() {
    firebaseService.auth.signInAnonymously();
    firebaseService.auth.onAuthStateChanged((user) => {
      if (user) {
        this.initialized = true;
      } else {
        this.initialized = true;
        firebaseService.auth.signInAnonymously();
      }
    });
  }

  @observable
  initialized = false;
}
