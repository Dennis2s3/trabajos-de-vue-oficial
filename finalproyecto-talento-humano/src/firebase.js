import firebase from "firebase/app";
import "firebase/firestore";

let config = {
    apiKey: "AIzaSyC11TLEjo4MKSIWdRn2iJZesuHKLIDrJWY",
    authDomain: "vue-firebase-crud-5ea20.firebaseapp.com",
    projectId: "vue-firebase-crud-5ea20",
    storageBucket: "vue-firebase-crud-5ea20.appspot.com",
    messagingSenderId: "535535563409",
    appId: "1:535535563409:web:3707a870024d1bd6b94530"
};

firebase.initializeApp(config);

export default firebase.firestore();