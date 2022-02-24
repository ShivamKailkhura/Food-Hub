// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1JzkHdtp-HsW0A_Dby0v-pfXw0cPs1E0",
  authDomain: "food-hub-eca2e.firebaseapp.com",
  projectId: "food-hub-eca2e",
  storageBucket: "food-hub-eca2e.appspot.com",
  messagingSenderId: "1071500546815",
  appId: "1:1071500546815:web:cfbffbb48e1c2ab3f9f2ca",
  measurementId: "G-S06FNZ1EP4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
