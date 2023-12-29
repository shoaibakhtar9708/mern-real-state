// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-dc57f.firebaseapp.com",
  projectId: "mern-estate-dc57f",
  storageBucket: "mern-estate-dc57f.appspot.com",
  messagingSenderId: "467467718358",
  appId: "1:467467718358:web:7e3a7e8fa61eeb41a64377",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
