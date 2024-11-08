// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyB47omic71EJwiy9L_3-vdfWCyqqToWFKY",
  authDomain: "hackthon-expertizo-project.firebaseapp.com",
  projectId: "hackthon-expertizo-project",
  storageBucket: "hackthon-expertizo-project.firebasestorage.app",
  messagingSenderId: "216277450437",
  appId: "1:216277450437:web:4f4676fbc07643d26dbaac",
  measurementId: "G-ZFSBYCY5ZV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const analytics = getAnalytics(app);

export  {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword , initializeApp}