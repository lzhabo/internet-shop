import * as firebase from "firebase-admin";
import { UploadedFile } from "express-fileupload";
import * as UUID from "uuid";
import * as config from "../config";

class FirebaseService {
  auth: firebase.auth.Auth;
  // storage: firebase.storage.Storage;

  get config() {
    return {
      credential: firebase.credential.cert(config.googleServiceAccount),
      // storageBucket: config.googleStorageBucket,
      databaseURL: config.firebaseDatabaseUrl,
    } as firebase.AppOptions;
  }

  constructor() {
    firebase.initializeApp(this.config);
    this.auth = firebase.auth();
    // this.storage = firebase.storage();
  }

  // uploadFile = async (file: UploadedFile) => {
  //   const path = UUID.v4() + "." + file.mimetype.replace("image/", "");
  //   const uuid = UUID.v4();
  //   const bucket = this.storage.bucket(process.env.STORAGE_BUCKET);
  //   return await bucket
  //     .file(path)
  //     .save(file.data, {
  //       metadata: {
  //         metadata: { firebaseStorageDownloadTokens: uuid },
  //         fileName: file.name,
  //         contentType: file.mimetype,
  //         size: file.size,
  //       },
  //     })
  //     .then(() => {
  //       return {
  //         downloadUrl:
  //           "https://firebasestorage.googleapis.com/v0/b/" +
  //           bucket.name +
  //           "/o/" +
  //           encodeURIComponent(path) +
  //           "?alt=media&token=" +
  //           uuid,
  //         fileName: file.name,
  //         path,
  //       };
  //     });
  // };
}

export default new FirebaseService();
//
// createIdToken = async (uid: string, claims?: Record<string, any>) => {
//   const url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyCustomToken?key=${process.env.FIREBASE_API_KEY}`;
//
//   const data = {
//     token: await this.auth.createCustomToken(uid, claims),
//     returnSecureToken: true,
//   };
//
//   const res = await axios.post(url, { data });
//   return res.data.idToken;
// };
