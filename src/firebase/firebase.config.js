// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyn_3z6CewTNuZ_InYXlqebCqL3lzFrr8",
  authDomain: "dragon-news-6f44e.firebaseapp.com",
  projectId: "dragon-news-6f44e",
  storageBucket: "dragon-news-6f44e.appspot.com",
  messagingSenderId: "241805880049",
  appId: "1:241805880049:web:3f43e44cab04371a5b5750"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;