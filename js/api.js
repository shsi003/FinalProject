export async function fetchBooks(){
	try{
		const resonse = await fetch(GET https://www.googleapis.com/books/v1/categories
		);
		if(!response.ok){
			throw new error(error);
		}
		const books = await response.json();
		return books;
	}catch(error){
		console.error('Error fetching books:', error)
	}
}