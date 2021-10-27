// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getFirestore} from 'firebase/firestore'

import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDxzv91oUU4DIo4_JUF1cD5UMaapKYtesk",
    authDomain: "tiktok-mohammed-clone.firebaseapp.com",
    projectId: "tiktok-mohammed-clone",
    storageBucket: "tiktok-mohammed-clone.appspot.com",
    messagingSenderId: "392139687316",
    appId: "1:392139687316:web:48686b6b9b7a6c8413bb81"
  };

const app = initializeApp(firebaseConfig);

export default getFirestore();
