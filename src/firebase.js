// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD_Ce_-VhDFpeEL-AZeLUveUlrWsLTiaYY",
    authDomain: "todo-app-cp-ad287.firebaseapp.com",
    databaseURL: "https://todo-app-cp-ad287-default-rtdb.firebaseio.com/",
    projectId: "todo-app-cp-ad287",
    storageBucket: "todo-app-cp-ad287.appspot.com",
    messagingSenderId: "428556186927",
    appId: "1:428556186927:web:e65644aa2eeba270d55dda",
    measurementId: "G-0M2ECD8EP6"
})

const db = firebaseApp.firestore();

export default db;