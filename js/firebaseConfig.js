//Imported from Firebase's website

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
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
const auth = getAuth(app);

export const registerUser = async (email, password) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(auth, email, password);
		console.log("User registered:", userCredential.user);
	}catch(error){
		console.error("Error registering user:", error);
	}
};

export const loginUser = async (email, password) => {
	try {
		const userCredential = await signInWithEmailAndPassword(auth, email, password);
		console.log("User logged in:", userCredential.user);
	}catch(error){
		console.error("Error logging in:", error);
	}

};

export const logoutUSer = async (email, password) => {
	try {
		const userCredential = await signOut(auth);
		console.log("User logged out");
	}catch (error) {
		console.error("Error logging out:", error);
	}
};

onAuthStateChanged(auth, (user) => {
	const userStatusDiv = document.getElementById("userStatus");
	if (user){
		userStatusDiv.innerHTML = `logged in as ${user.email}`;
	}else{
		userStatusDiv.innerHTML = "Not logged in";
	}
});


