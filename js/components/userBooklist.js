import { doc, setDoc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

class UserBooklist {
    constructor(userId) {
        this.userId = userId;
        this.booklistRef = collection(db, `users/${userId}/books`);
    }

    async addBook(book) {
        try {
            const bookRef = doc(this.booklistRef, book.title); // Use book title as a unique identifier
            await setDoc(bookRef, {
                title: book.title,
                author: book.author,
                category: book.category
            });
            console.log('Book added:', book);
        } catch (error) {
            console.error('Error adding book:', error);
        }
    }

    async getBooks() {
        try {
            const q = query(this.booklistRef);
            const querySnapshot = await getDocs(q);
            const books = [];
            querySnapshot.forEach((doc) => {
                books.push(doc.data());
            });
            return books;
        } catch (error) {
            console.error('Error getting books:', error);
            return [];
        }
    }

    async deleteBook(title) {
        try {
            const bookRef = doc(this.booklistRef, title);
            await deleteDoc(bookRef);
            console.log('Book deleted:', title);
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    }
}

export default UserBooklist;
