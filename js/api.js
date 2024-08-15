export async function fetchBooks(){
	try{
		const resonse = await fetch( 'https://www.googleapis.com/books/v1/categories'
		);
		if(!response.ok){
			throw new Error(error);
		}
		const books = await response.json();
		return books;
	}catch(error){
		console.error('Error fetching categories:', error)
	};	

}

export async function searchBooks(query) {
	try {
		const resonse = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`);
		if(!response.ok) {
			throw new Error(error)
		}
		const data = await response.json();
		return data.items;
	}catch(error){
		console.error('Error fetching books:', error);
	}
}