

import express from 'express';
const router = express.Router();


function test(req, res, next) {
	res.status(200).json({
		data: {},
		err: null
	});
}
router.get('/test', test);

exports.router = router;