import firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBiMAt52h5hbzNK_SytnGbNS-86YJFwwf8",
    authDomain: "facebook-150ea.firebaseapp.com",
    projectId: "facebook-150ea",
    storageBucket: "facebook-150ea.appspot.com",
    messagingSenderId: "815035283733",
    appId: "1:815035283733:web:3a1c2cd6d8fe6d8ea9d11c"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebase.Config) :firebase.app();
  const db = app.firestore();
  const storage = firebase.storage();

  export {db, storage};