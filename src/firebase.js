import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDG8L-BBcPHk1_7CXjycdtkmthoo4YL7Ps",
    authDomain: "twitter-clone-f799b.firebaseapp.com",
    databaseURL: "https://twitter-clone-f799b.firebaseio.com",
    projectId: "twitter-clone-f799b",
    storageBucket: "twitter-clone-f799b.appspot.com",
    messagingSenderId: "390050221520",
    appId: "1:390050221520:web:00110990c7a7cee5a17dd5",
    measurementId: "G-DZSXYJ9FS6"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;