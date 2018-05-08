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
async function getRandom(req, res, next) {
	try {
		const result = await recipeFunctions.randomRecipe();
		res.status(200).json({
			data: result,
			err: null
		});
	} catch (err) {
		res.status(500).json({
			data: null,
			err: err
		});
	};
}
router.get('/randomRecipe', getRandom);

async function getRecipe(req, res, next) {
	const recipeID = req.params.recipeID;

	try {
		const result = await recipeFunctions.getRecipe(recipeID);

		res.status(200).json({
			data: result,
			err: null
		});
	} catch (err) {
		res.status(500).json({
			data: null,
			err: err
		});
	}
}
router.get('/recipe/:recipeID', getRecipe);

async function createRecipe(req, res, next) {

	// Why not just const recipe = req.body ?
	const recipe = {
		name: req.body.name,
		classification: req.body.classification,
		tags: req.body.tags,
		instructions: req.body.instructions,
		ingredients: req.body.ingredients
	};

	try {
		const result = await recipeFunctions.newRecipe(recipe);

		res.status(200).json({
			data: result,
			err: null
		});
			
	} catch (err) {
		res.status(500).json({
			data: null,
			err: err
		});
	};
}
router.post('/recipe', createRecipe);

async function findRecipe(req, res, next) {
	const searchText = req.query.searchText || "";

	try {
		const result = await Promise.all([
			recipeFunctions.getRecipeByName(searchText),
			recipeFunctions.getRecipesByClassification(searchText),
			recipeFunctions.getRecipesByTags(searchText.split(" "))
		]);

		let results = [result[0], ...result[1], ...result[2]].filter((n) => n != undefined);
		const unique_obj = {};

		for (let i = 0; i < results.length; i++) {
			unique_obj[results[i]["_id"]] = results[i];
		}

		results = [];
		for (let key in unique_obj) {
			results.push(unique_obj[key]);
		}

		res.status(200).json({
			data: results,
			err: null
		});
	
	} catch (err) {
		res.status(500).json({
			data: null,
			err: err
		});
	}
}
router.get('/search/recipe', findRecipe);

exports.router = router;
