// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/app";
require('firebase/firestore')
require('firebase/auth')

const firebaseConfig = {
    apiKey: "AIzaSyDWf7PxiJHq0sI1MnZem730KIAkWsxxuuc",
    authDomain: "rowwee-92cf3.firebaseapp.com",
    databaseURL: "https://rowwee-92cf3-default-rtdb.firebaseio.com",
    projectId: "rowwee-92cf3",
    storageBucket: "rowwee-92cf3.appspot.com",
    messagingSenderId: "454771769381",
    appId: "1:454771769381:web:5d1ee3820536f328caffcc",
    measurementId: "G-D22RP2EVX5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;