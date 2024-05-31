//Async method for fetching and displaying data
async function fetchData(){
	try{

		//Function for searching and fetching pokemon data
		const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

		if(!response.ok){
			throw new Error("could not fetch data");
		}

		const data = await response.json();
		console.log(data)

		//show name of pokemon
		const namePokemon = data.name;
		const pokemonSpecies = document.getElementById("pokemonSpecies");
		pokemonSpecies.innerHTML = namePokemon

		//Functions for displaying pokemon sprite
		const pokemonSprite = data.sprites.front_default;
		const imgElement = document.getElementById("pokemonSprite");

		imgElement.src = pokemonSprite;
		imgElement.style.display= "block";



	}
	catch(error){
		console.error(error);
	}
}

/* 


*/