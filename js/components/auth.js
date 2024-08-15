import { auth } from "../firebaseConfig.js";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

export const registerUser = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User registered:", userCredential.user);
    } catch (error) {
        console.error("Error registering user:", error);
        alert(getErrorMessage(error));
    }
};

export const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in:", userCredential.user);
    } catch (error) {
        console.error("Error logging in:", error);
        alert(getErrorMessage(error));
    }
};

export const logoutUser = async () => {
    try {
        await signOut(auth);
        console.log("User logged out");
    } catch (error) {
        console.error("Error logging out:", error);
    }
};

onAuthStateChanged(auth, (user) => {
    const userStatusDiv = document.getElementById("userStatus");
    if (user) {
        userStatusDiv.innerHTML = `logged in as ${user.email}`;
    } else {
        userStatusDiv.innerHTML = "Not logged in";
    }
});

export const monitorAuthState = (callback) => {
    onAuthStateChanged(auth, (user) => {
        callback(user);
    }); 
};


const getErrorMessage = (error) => {
    switch (error.code) {
        case 'auth/invalid-email':
            return 'Invalid email format.';
        case 'auth/weak-password':
            return 'Password should be at least 6 characters long.';
        case 'auth/email-already-in-use':
            return 'Email already in use.';
        case 'auth/user-not-found':
            return 'No user found with this email.';
        case 'auth/wrong-password':
            return 'Incorrect password.';
        default:
            return 'An unknown error occurred.';
    }
};