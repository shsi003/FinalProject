//Imported from Firebase's website

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdYAvk7DATwU7VetkanOWi888LRjd_mh0",
  authDomain: "finalproject-cc183.firebaseapp.com",
  projectId: "finalproject-cc183",
  storageBucket: "finalproject-cc183.appspot.com",
  messagingSenderId: "147973645453",
  appId: "1:147973645453:web:76b6080dff0273bde6aec4",
  measurementId: "G-W13ZB2PK75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;


