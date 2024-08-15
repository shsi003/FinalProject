import { fetchBooks } from "./components/fetchBooks.js";
import { searchBooks } from "./components/searchBooks.js";

fetchBooks()
	.then(books => {
		console.log('Fetched books', books);
	})
	.catch(error => {
		console.error('Error fetching books:', error);
	});

