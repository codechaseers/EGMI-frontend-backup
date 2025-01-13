// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyA9ohcPFbpyLvUsPU-TFqHQxn4AsATvd14",
    authDomain: "blackstoc-a7c15.firebaseapp.com",
    projectId: "blackstoc-a7c15",
    storageBucket: "blackstoc-a7c15.appspot.com",
    messagingSenderId: "1034510093564",
    appId: "1:1034510093564:web:38d8465998642c9c4cdb79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)