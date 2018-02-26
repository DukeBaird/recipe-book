
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import config from '../config.js';
import mongoose from 'mongoose';
import api from './api/api.js';
import routes from './routes.js';

const app = express();

function start() {

	app.set('port', (process.env.PORT || 8080));
	app.use(express.static(__dirname + '/../public'));
	app.use(bodyParser.json());

	app.set('views', __dirname + '/../views');
	app.set('view engine', 'pug');

	app.use(logger('common'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));

	app.use((req, res, next) => {
	    res.setHeader('Access-Control-Allow-Origin', '*');
	    res.setHeader('Cache-Control', 'no-cache');
	    next();
	});

	app.use('/api/v1', api.router);
	app.use('/', routes);

	mongoose.connect((process.env.MONGOSTRING || config.mongoString), err => {
		if (err) {
			console.log('Mongo Connection Error', err);
		} else {
			console.log('Mongo Connection Successful');
		}
	});

	app.listen(app.get('port'), () => {
	    console.log('Server running on localhost:' + app.get('port'));
	});

}

exports.start = start;