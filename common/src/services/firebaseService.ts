import * as firebase from "firebase/app";
import "firebase/auth";

class FirebaseService {
  init(config: any) {
    firebase.initializeApp(config);
  }

  get auth() {
    return firebase.auth();
  }

  get firebase() {
    return firebase;
  }
}

export default new FirebaseService();
