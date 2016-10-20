
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();

function start() {

	app.set('port', (process.env.PORT || 80));
	app.use(express.static(__dirname + '/../public'));
	app.use(bodyParser.json());

	app.set('views', __dirname + '/../views');
	app.set('view engine', 'pug');

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));

	app.use(express.static(path.join(__dirname, 'public')));

	app.use((req, res, next) => {
	    res.setHeader('Access-Control-Allow-Origin', '*');
	    res.setHeader('Cache-Control', 'no-cache');
	    next();
	});

	app.get('/', (req, res) => {
	    res.render('index');
	});

	app.listen(app.get('port'), () => {
	    console.log('Server running on localhost:' + app.get('port') + '/');
	});

}


exports.start = start;