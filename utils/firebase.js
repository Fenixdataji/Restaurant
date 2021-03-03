import firebase from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDnvjK30B_ZHocYRCUmuEZwlF6MJkAhfw4",
    authDomain: "restaurants-81aad.firebaseapp.com",
    projectId: "restaurants-81aad",
    storageBucket: "restaurants-81aad.appspot.com",
    messagingSenderId: "271893560935",
    appId: "1:271893560935:web:2563ccf1373e840c53dec2"
  };
  // Initialize Firebase
  export const firebaseApp = firebase.initializeApp(firebaseConfig)