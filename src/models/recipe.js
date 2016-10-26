
import mongoose from 'mongoose';
const recipeSchema = mongoose.Schema({
	_id: String,
	Name: String,
	Classification: String,
	Tags: [String],
	Instructions: String,
	Ingredients: {
		Name: String,
		Amount: Number,
		AmountType: String
	}
});
module.exports = mongoose.model('Recipes', recipeSchema, 'Recipes');
