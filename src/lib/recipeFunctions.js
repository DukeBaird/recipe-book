
import mongoose from 'mongoose';
import Recipe from '../models/recipe.js';


/*
 * newRecipe
 * Adds a new recipe to the database
 * input: A JSON object arranged like a recipe (see models/recipe.js)
 * output: Returns a promise of the save function
 */
exports.newRecipe = recipe => {
	let rec = new Recipe();
	rec.name = recipe.name;
	rec.classification = recipe.classification;
	rec.tags = recipe.tags;
	rec.instructions = recipe.instructions;
	rec.ingredients = recipe.ingredients;
	return rec.save();
};

/*
 * getRecipeByName
 * Attempts to find a recipe by the given name
 * input: A string containing the name of a recipe
 * output: Returns a promise object, resolving with the recipe, if exists
 */
exports.getRecipeByName = name => {};

/*
 * getRecipesByClassification
 * Attempts to find recipes up to the given amount of the given classification
 * input: A string containing the classification, and an int of the amount to find
 * output: Returns a promise object, resolving with an array of recipes
 */
exports.getRecipesByClassification = (classification, amount) => {};

/*
 * getRecipesBytags
 * Attempts to find recipes up to the given amount of the given tags
 * input: A array containing the tags (string), and an int of the amount to find
 * output: Returns a promise object, resolving with an array of recipes
 */
exports.getRecipesByTags = (tags, amount) => {};

/*
 * updateRecipe
 * Updates a given recipe with the new object
 * input: A recipe object
 * output: Returns a promise object, resolving a boolean value of the result
 */
exports.updateRecipe = recipe => {};

/*
 * deleteRecipe
 * Deletes the recipe of the given id
 * input: A recipe ids
 * output: Returns a promise object, resolving a boolean value of the result
 */
exports.deleteRecipe = id => {};