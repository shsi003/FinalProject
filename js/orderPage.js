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
<h1>Get a free Pokèmon keychain with your order</h1>

		<div class="Pokedex">

			<input type="text" class="pokeSearch" id="pokemonName" placeholder="Enter Pokemon name">
		<button onclick="fetchData()">Fetch pokemon</button> <br>
		<div class="Attribute">
			<h1>Name</h1>
			<p id="pokemonSpecies"> </p>
		</div>
		<br>
		<div class="Attribute">
			<h1>Appearance</h1>
			<img src=""  class="pokemonImg" alt="pokemonSprite" id="pokemonSprite" style="display: none">
		</div>

		<div class="wrapper">
			<form action="" class="form">

				<label for="First_name">First Name</label>
				<input type="text" required>
				<br>
	
				<label for="Last_name">Last Name</label>
				<input type="text" required>
				<br>
	
				<label for="Phone_number">Phone number</label>
				<input type="number" required>
	
				<label for="Delivery_adress">Delivery adress</label>
				<input type="text" required>
	
				<p>Note: The bill will be sent along with the package</p>
	
				<button type="submit" onclick="alert('Your order has been registered')">Order</button>
			</form>

		</div>

*/