import express from 'express';
import recipeFunctions from '../lib/recipeFunctions.js';
const router = express.Router();

function test(req, res, next) {
	res.status(200).json({
		data: [{
			name: 'Dummy Recipe',
			classification: "Duck Bird"
		}],
		err: null
	});
}
router.get('/test', test);

// TODO: Test these
function getRandom(req, res, next) {
	recipeFunctions.randomRecipe().then((data, err) => {
		if (err) {
			res.status(500).json({
				data: null,
				err: err
			});
		} else {
			res.status(200).json({
				data: data,
				err: null
			});
		}
	});
}
router.get('/randomRecipe', getRandom);

function getRecipe(req, res, next) {
	const recipeID = req.params.recipeID;
	recipeFunctions.getRecipe(recipeID).then((data, err) => {
		if (err) {
			res.status(500).json({
				data: null,
				err: err
			});
		} else {
			res.status(200).json({
				data: data,
				err: null
			});
		}
	});

}
router.get('/recipe/:recipeID', getRecipe);

function createRecipe(req, res, next) {

	const recipe = {
		name: req.body.name,
		classification: req.body.classification,
		tags: req.body.tags,
		instructions: req.body.instructions,
		ingredients: req.body.ingredients
	};

	recipeFunctions.newRecipe(recipe).then((data, err) => {
		if (err) {
			res.status(500).json({
				data: null,
				err: err
			});
		} else {
			res.status(200).json({
				data: data,
				err: null
			});
		}
	});
}
router.post('/recipe', createRecipe);

function findRecipe(req, res, next) {
	const searchText = req.query.searchText || "";

	const promises = [
		recipeFunctions.getRecipeByName(searchText),
		recipeFunctions.getRecipesByClassification(searchText),
		recipeFunctions.getRecipesByTags(searchText.split(" "))
	];

	Promise.all(promises).then(result => {
		const results = [result[0], ...result[1], ...result[2]];
		let unique = [...new Set(results)];
		const unique_obj = {};

		for (let i = 0; i < unique.length; i++) {
			unique_obj[unique[i]["_id"]] = unique[i];
		}

		unique = [];
		for (let key in unique_obj) {
			unique.push(unique_obj[key]);
		}

		res.status(200).json({
			data: unique,
			err: null
		});
	}).catch(err => {
		res.status(500).json({
			data: null,
			err: err
		});
	});
}
router.get('/search/recipe', findRecipe);

exports.router = router;
