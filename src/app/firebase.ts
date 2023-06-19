import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEq9TwRLdy-j5-dbiB5wg8G-cS7YEUXLY",
  authDomain: "next-auth-adapter.firebaseapp.com",
  projectId: "next-auth-adapter",
  storageBucket: "next-auth-adapter.appspot.com",
  messagingSenderId: "690117254934",
  appId: "1:690117254934:web:c396f7a549de8e3a8e7a37"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db }