import apiService from "shop-common/services/apiService";
import firebaseService from "shop-common/services/firebaseService";
import productsService from "shop-common/services/productsService";

// Initialize Firebase
const config = {
  apiKey: window._env_.FIREBASE_API_KEY,
  authDomain: window._env_.FIREBASE_AUTH_DOMAIN,
  databaseURL: window._env_.FIREBASE_DATABASE_URL,
  projectId: window._env_.FIREBASE_PROJECT_ID,
  storageBucket: window._env_.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: window._env_.FIREBASE_MESSAGING_SENDER_ID,
  appId: window._env_.FIREBASE_APP_ID,
};

firebaseService.firebase.initializeApp(config);
apiService.init(window._env_.API_BASE, firebaseService.auth);
export { apiService, productsService, firebaseService };
