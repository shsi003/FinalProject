// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt2re6GqeKGkoCY7rXTjEGPXj63-Wn-G0",
  authDomain: "schoolproject-152bc.firebaseapp.com",
  projectId: "schoolproject-152bc",
  storageBucket: "schoolproject-152bc.firebasestorage.app",
  messagingSenderId: "1051490209342",
  appId: "1:1051490209342:web:09616617decac96d5f0b6f"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut}