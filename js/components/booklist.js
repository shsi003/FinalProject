import {db} from "../firebaseConfig";
import {
	collection,
	addDoc,
	getDocs,
	query,
	where
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const GOOGLE_BOOKS_API = 'https://www.googleapis.com/books/v1/volumes?q=';

export const searchBooks = async (query) => {
	try {
		const respone = await fetch(`${GOOGLE_BOOKS_API}${encodeURIComponent(query)}`);
		const data = await response.json();
		return data.items || [];
	}catch(error){
		console.error("Error fetching books:", error);
		alert("failed to fetch books, please try again or come back later if error persists");
		return [];
	}

};

