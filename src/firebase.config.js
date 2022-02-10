// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBThgQEk7CEt-Fvn81FB05-rN3RRW3DPVE",
  authDomain: "house-marketplace-e720c.firebaseapp.com",
  projectId: "house-marketplace-e720c",
  storageBucket: "house-marketplace-e720c.appspot.com",
  messagingSenderId: "759614174250",
  appId: "1:759614174250:web:538fe24158553bdf66ff53",
  measurementId: "G-R7RRMTP728"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()