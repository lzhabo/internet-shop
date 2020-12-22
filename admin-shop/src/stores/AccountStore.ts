import { action, observable, runInAction } from "mobx";
import { RootStore } from "./index";
import firebaseService from "shop-common/services/firebaseService";
import authService from "shop-common/services/authService";
import { notification } from "antd";

export interface IAdmin {
  firebase_uid: string;
  phone_number: string;
  email: string;
  is_admin: boolean;
}

export default class AccountStore {
  public rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    firebaseService.auth.onAuthStateChanged(
      this._onAuthStateChanged.bind(this)
    );
  }

  @observable admin: IAdmin | null = null;
  token: string = "";
  @action
  public signOut = () => firebaseService.auth.signOut().then().catch();

  @action
  public signInWithEmailAndPassword = (
    login: string,
    password: string,
    remember?: boolean
  ) =>
    firebaseService.auth
      .setPersistence(
        remember
          ? firebaseService.firebase.auth.Auth.Persistence.LOCAL
          : firebaseService.firebase.auth.Auth.Persistence.SESSION
      )
      .then(() =>
        firebaseService.auth.signInWithEmailAndPassword(login, password)
      )
      .catch(
        (e) => notification.error({ message: e.message ?? "Something wrong!" })
        // this.rootStore.notificationStore.error({
        //   message: e.message ?? "Something wrong!",
        // })
      );

  @action
  private async _onAuthStateChanged(firebaseUser: firebase.User | null) {
    if (firebaseUser == null) {
      this.admin = null;
    } else {
      try {
        const token = await firebaseUser.getIdToken();
        console.dir(token);
        const admin = await authService.auth();
        if (admin?.is_admin)
          runInAction(() => {
            this.admin = admin;
            this.token = token;
          });
      } catch (e) {
        await firebaseService.auth.signOut();
        notification.error({ message: e.message ?? "Something wrong!" });
        // this.rootStore.notificationStore.error({
        //   message: e.message ?? "Something wrong!",
        // });
      }
    }
  }
}
