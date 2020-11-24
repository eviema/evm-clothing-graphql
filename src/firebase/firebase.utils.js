import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAtg7l_VK7x2s9H2DfEvixx0kS2Z214PIg",
  authDomain: "evm-clothing-db.firebaseapp.com",
  databaseURL: "https://evm-clothing-db.firebaseio.com",
  projectId: "evm-clothing-db",
  storageBucket: "evm-clothing-db.appspot.com",
  messagingSenderId: "656200046591",
  appId: "1:656200046591:web:aef54993a23d369fd739ca",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`); // ref only

  const snapShot = await userRef.get(); // contains actual user data

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user: ", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
