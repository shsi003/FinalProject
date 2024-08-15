import {db} from "../firebaseConfig";
import {
	collection,
	addDoc,
	getDocs,
	query,
	where
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const GOOGLE_BOOKS_API = 'https://www.googleapis.com/books/v1/volumes?q=';

class Book {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
}
