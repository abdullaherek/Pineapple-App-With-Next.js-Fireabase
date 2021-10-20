import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const clientCredentials = {
  apiKey: "AIzaSyBcxKZiBWModD-J5B847GrT2JTqlNMJ38E",
  authDomain: "fir-pineapple-80468.firebaseapp.com",
  projectId: "fir-pineapple-80468",
  storageBucket: "fir-pineapple-80468.appspot.com",
  messagingSenderId: "842807390431",
  appId: "1:842807390431:web:fa8b6a25b680215501f96a",
  measurementId: "G-HBSQNJT00X"
};

if(!firebase.apps.length){
    firebase.initializeApp(clientCredentials);
}
export default firebase;