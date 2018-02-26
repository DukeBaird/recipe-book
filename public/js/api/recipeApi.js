class RecipeApi {
	static getRecipe() {
		return fetch('/api/v1/test').then(response => {
			console.log("responded!");
			return response.json();
		}).catch(error => {
			return error;
		});
	}
}

export default RecipeApi;