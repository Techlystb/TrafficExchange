// Placeholder for firebase-config.sample.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7qpEGqaVjQh-hyniCCbHh6Ut_fkInED4",
  authDomain: "trafficexchange-stb.firebaseapp.com",
  projectId: "trafficexchange-stb",
  storageBucket: "trafficexchange-stb.firebasestorage.app",
  messagingSenderId: "69178339515",
  appId: "1:69178339515:web:c3c5759f6fad673696f99e",
  measurementId: "G-EW6RECN845"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
