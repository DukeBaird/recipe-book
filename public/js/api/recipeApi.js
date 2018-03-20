class RecipeApi {
	static getRecipe() {
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
}

export default RecipeApi;