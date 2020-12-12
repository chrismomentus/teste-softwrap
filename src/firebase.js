import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyB7uRzZm_0l2tqyFupk21vZKdoO5tgrqaQ",
    authDomain: "teste-softwrap-7d1d8.firebaseapp.com",
    projectId: "teste-softwrap-7d1d8",
    storageBucket: "teste-softwrap-7d1d8.appspot.com",
    messagingSenderId: "478523550015",
    appId: "1:478523550015:web:fb17a13fd35b1a418b0b8a",
    measurementId: "G-98M6NJKVHE"
})


  //export const firebaseDb = app.database().ref();
  export const auth = app.auth();
  //export default app; 