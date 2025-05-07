// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmrsPjtGa85AwxdJZ11dW83DAFZSUpKCU",
  authDomain: "visionplay-9711a.firebaseapp.com",
  projectId: "visionplay-9711a",
  storageBucket: "visionplay-9711a.firebasestorage.app",
  messagingSenderId: "737353298989",
  appId: "1:737353298989:web:af0046957d0a6b067ef4a4",
  measurementId: "G-QN54JPNYD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();