
var test_recipe = '123456789';
var recipe_name = 'test_recipe';
var recipe_description = 'this is a description';
var recipe_classification = 'test_class';
var recipe_tags = ['test', 'test2'];
var recipe_instructions = 'this is a test';
var recipe_ingredients = [{
	name: 'test',
	amount: 1,
	amountType: 'test'
}];


// Exports
exports.test_recipe = test_recipe;
exports.recipe_name = recipe_name;
exports.recipe_classification = recipe_classification;

// Test db data
exports.recipeData = {
	_id: test_recipe,
	name: recipe_name,
	description: recipe_description,
	classification: recipe_classification,
	tags: recipe_tags,
	instructions: recipe_instructions,
	ingredients: recipe_ingredients
};
