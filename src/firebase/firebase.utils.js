import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAFWfbaVOMf0eacocDOEMBEQLwuSErcS4o",
  authDomain: "workomatic-74a7e.firebaseapp.com",
  databaseURL: "https://workomatic-74a7e.firebaseio.com",
  projectId: "workomatic-74a7e",
  storageBucket: "workomatic-74a7e.appspot.com",
  messagingSenderId: "1030607997897",
  appId: "1:1030607997897:web:7b44e062bfa0b49532b618",
  measurementId: "G-VVE9RB4958",
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

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
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
