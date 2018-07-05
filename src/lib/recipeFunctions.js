
import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');
import Recipe from '../models/recipe.js';

/*
 * newRecipe
 * Adds a new recipe to the database
 * input: A JSON object arranged like a recipe (see models/recipe.js)
 * output: Returns a promise of the save function
 */
exports.newRecipe = recipe => {
	let rec = new Recipe();
	rec._id = String(new Date().getTime()) + '-' + String(parseInt(100000 * Math.random()));
	rec.name = recipe.name;
	rec.classification = recipe.classification;
	rec.description = recipe.description;
	rec.tags = recipe.tags;
	rec.instructions = recipe.instructions;
	rec.ingredients = recipe.ingredients;
	return rec.save();
};


/*
 * getRecipe
 * Finds a given recipe by the ID
 * input: _id of a recipe
 * output: Returns a promise object, resolving with the recipe, if exists
 * and null if it does not
 */
exports.getRecipe = recipeID => {
	return Recipe.findById(recipeID);
}

/*
 * getRecipeByName
 * Attempts to find a recipe by the given name
 * input: A string containing the name of a recipe
 * output: Returns a promise object, resolving with the recipe, if exists
 * and null if it does not
 */
 // TODO: Should this only return one?
exports.getRecipeByName = name => {
	return Recipe.findOne({
		name: name
	});
};

/*
 * getRecipesByClassification
 * Attempts to find recipes up to the given limit of the given classification
 * input: A string containing the classification, and an int of the limit to find
 * output: Returns a promise object, resolving with an array of recipes
 */
exports.getRecipesByClassification = (classification, limit = 5) => {
	return Recipe.find({
		classification: classification
	}).limit(limit);
};

/*
 * getRecipesBytags
 * Attempts to find recipes up to the given limit of the given tags
 * input: A array containing the tags (string), and an int of the limit to find
 * output: Returns a promise object, resolving with an array of recipes
 */
exports.getRecipesByTags = (tags, limit = 5) => {
	return Recipe.find({
		tags: {
			$in: tags
		}
	}).limit(limit);
};

/*
 * updateRecipe
 * Updates a given recipe with the new object
 * input: A recipe **_id**, and an object with the data to update the recipe with
 * output: Returns a promise object, resolving a boolean value of the result
 */
exports.updateRecipe = (id, recipe) => {
	return Recipe.findByIdAndUpdate(id, recipe, {new: true});
};

/*
 * deleteRecipe
 * Deletes the recipe of the given id
 * input: A recipe ids
 * output: Returns a promise object, resolving a boolean value of the result
 */
exports.deleteRecipe = id => {
	return Recipe.findByIdAndRemove(id);
};

/*
 * randomRecipe
 * Pulls a random recipe from the db
 * input: Nothing
 * output: Returns a random recipe
*/
// TODO: Unit test this
exports.randomRecipe = () => {
	return Recipe.aggregate({
		$sample: { size: 1}
	});
};