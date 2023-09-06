// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhMI7N2D8xKmT2G2eHE7zsUCC4m9DoV5I",
  authDomain: "netflix-clone-e703b.firebaseapp.com",
  projectId: "netflix-clone-e703b",
  storageBucket: "netflix-clone-e703b.appspot.com",
  messagingSenderId: "259260853495",
  appId: "1:259260853495:web:759388059a20dfbb50b7f2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 