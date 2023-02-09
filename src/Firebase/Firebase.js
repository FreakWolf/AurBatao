import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyASbWbJnhd_GsIFC147jzJ_srDIRorFoZY",
  authDomain: "aurbatao-bb5d0.firebaseapp.com",
  projectId: "aurbatao-bb5d0",
  storageBucket: "aurbatao-bb5d0.appspot.com",
  messagingSenderId: "12288749587",
  appId: "1:12288749587:web:661e8956276daa9e2c8fe6",
  measurementId: "G-3XCN5B0G2V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, provider, storage };
