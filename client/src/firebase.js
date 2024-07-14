// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mearn-auth-308b7.firebaseapp.com",
  projectId: "mearn-auth-308b7",
  storageBucket: "mearn-auth-308b7.appspot.com",
  messagingSenderId: "231739327615",
  appId: "1:231739327615:web:c7865e9e017e1c90332b4a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);