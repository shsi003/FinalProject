import { registerUser, loginUser, logoutUser, monitorAuthState } from "./components/auth.js";

const registerEmailInput = document.getElementById("registerEmail");
const registerPasswordInput = document.getElementById("registerPassword");
const registerBtn = document.getElementById("registerBtn");
const loginEmailInput = document.getElementById("loginEmail");
const loginPasswordInput = document.getElementById("loginPassword");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const userStatusDiv = document.getElementById("userStatus");
const userLinkDiv = document.getElementById("userLink");


monitorAuthState((user) => {
    if (user) {
        userStatusDiv.innerHTML = `Logged in as ${user.email}`;
        userLinkDiv.style.display = "block"; 
    } else {
        userStatusDiv.innerHTML = "Not logged in";
        userLinkDiv.style.display = "none";
    }
});


registerBtn.addEventListener('click', async () => {
    const email = registerEmailInput.value;
    const password = registerPasswordInput.value;
    if (email && password) {
        try {
            await registerUser(email, password);
        } catch (error) {
        
        }
    } else {
        alert("Please enter a valid email and password.");
    }
});


loginBtn.addEventListener('click', async () => {
    const email = loginEmailInput.value;
    const password = loginPasswordInput.value;
    if (email && password) {
        try {
            await loginUser(email, password);
        } catch (error) {
            
        }
    } else {
        alert("Please enter a valid email and password.");
    }
});


logoutBtn.addEventListener('click', async () => {
    try {
        await logoutUser();
    } catch (error) {
        alert(error.message);
    }
});
