class RecipeApi {
	static getRandomRecipe() {
		return fetch('/api/v1/randomRecipe').then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});
	}

	static createRecipe(recipe) {
		return fetch('/api/v1/recipe', {
			body: JSON.stringify(recipe),
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			}
		}).then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});
	}

	static findRecipe(searchText) {
		return fetch('/api/v1/search/recipe?searchText=' + searchText).then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});
	}

	static getRecipe(recipeID) {
		return fetch('/api/v1/recipe/' + recipeID).then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});
	}
}

export default RecipeApi;