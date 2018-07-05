import mongoose from 'mongoose';

const recipeSchema = mongoose.Schema({
	_id: String,
	name: String,
	classification: String,
	description: String,
	tags: [String],
	instructions: String,
	time: Number,
	ingredients: [{
		_id: false,
		name: String,
		amount: Number,
		amountType: String
	}]
});

module.exports = mongoose.model('Recipe', recipeSchema, 'Recipe');
