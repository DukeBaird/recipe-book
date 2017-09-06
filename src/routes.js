import express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
	res.render('index');
});

router.get('/search', (req, res, next) => {
	res.render('index');
});

router.get('/submit', (req, res, next) => {
	res.render('index');
});

router.get('/404', (req, res, next) => {
	res.render('index');
});

router.get('*', (req, res, next) => {
	res.redirect('/404');
});
	
module.exports = router;
