import app from "../firebaseConfig.js";
import { getAuth, 
	createUserWithEmailAndPassword, 
	signInWithEmailAndPassword, 
	signOut, 
	onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js" ;

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

export const logoutUser = async () => {
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

document.getElementById('registerBtn').addEventListener('click', () => {
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    registerUser(email, password);
});

document.getElementById('loginBtn').addEventListener('click', () => {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    loginUser(email, password);
});

document.getElementById('logoutBtn').addEventListener('click', () => {
    logoutUser();
});