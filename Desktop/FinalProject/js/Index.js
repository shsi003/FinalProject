import {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from './fireBase.js'

        const userEmail = document.getElementById('userEmail');
		const userPassword = document.getElementById('userPassword');
		const authForm = document.getElementById('authForm');
		const secretContent = document.getElementById('secretContent');
		const signUpbtn = document.getElementById('signUpbtn');
		const signInbtn = document.getElementById('signInbtn');
		const signOutbtn = document.getElementById('signOutbtn');
		const searchBox = document.getElementById('searchBox');
		const searchBtn = document.querySelector('searchBtn');
		const recipeContainer = document.getElementById('recipeContainer');

		const fetchRecipes = (query) => {
			const data = fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${query}`);

		}


		searchBtn.addEventListener('click', (e) => {
			e.preventDefault();
			const searchInput = searchBox.value.trim();
			fetchRecipes(searchInput);

		})

		secretContent.style.display='none';

		const userSignUp = async() => {
			const signUpEmail = userEmail.value
			const signUpPassWord = userPassword.value
			createUserWithEmailAndPassword(auth,signUpEmail,signUpPassWord) //use defined variables to create user
			 .then((userCredential) => {
				const user = userCredential.user;
				console.log(user) //use the log to confirm if the info was passed
				alert("Your account has been created!")
			 })
			 .catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode+errorMessage); //show what went wrong
			 })



		}


		const userSignIn = async() => {
			const signInEmail = userEmail.value
			const signInPassWord = userPassword.value
			signInWithEmailAndPassword(auth,signInEmail,signInPassWord) //use defined variables to verify user
			 .then((userCredential) => {
				const user = userCredential.user;
				console.log(user) //use the log to confirm if the info was passed
				alert("You have signed in!")
			 })
			 .catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode+errorMessage); //show what went wrong
			 })



		}


					//check if the user is logged in
		const checkAuthState = async() => {				
			onAuthStateChanged(auth, user => {
				if(user) {
					authForm.style.display='none';
					secretContent.style.display='block';
				}else{
					authForm.style.display='block';
					secretContent.style.display='none';
				}
			})
		}

			//signout function
		const userSignOut = async() => {
			await signOut(auth);
		}


		checkAuthState(); //function always active, without requiring event trigger

		signUpbtn.addEventListener('click', userSignUp);	
		signInbtn.addEventListener('click', userSignIn);
		signOutbtn.addEventListener('click', userSignOut);