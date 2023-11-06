// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-app-d0669.firebaseapp.com",
  projectId: "real-estate-app-d0669",
  storageBucket: "real-estate-app-d0669.appspot.com",
  messagingSenderId: "465833477351",
  appId: "1:465833477351:web:1ec212cdecc4f1ce40ce42",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
