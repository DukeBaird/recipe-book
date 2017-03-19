import mongoose from 'mongoose';

const recipeSchema = mongoose.Schema({
	_id: String,
	name: String,
	classification: String,
	tags: [String],
	instructions: String,
	ingredients: [{
		name: String,
		amount: Number,
		amountType: String
	}]
});

module.exports = mongoose.model('Recipe', recipeSchema, 'Recipe');
