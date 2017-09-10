import express from 'express';
import recipeFunctions from '../lib/recipeFunctions.js';
const router = express.Router();

function test(req, res, next) {
	res.status(200).json({
		data: {},
		err: null
	});
}
router.get('/test', test);


// TODO: What does (data, err) actually hold??
// TODO: Test these
function getRandom(req, res, next) {
	recipeFunctions.randomRecipe().then((data, err) => {
		console.log(data, err);
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
		instrs: req.body.instructions,
		ingrds: req.body.ingredients
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


exports.router = router;
