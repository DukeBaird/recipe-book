var express = require('express');
var app = express();
var url = require('url');
var bodyParser = require('body-parser');
var http = require('http').Server(app);

function start() {


	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'pug');

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));

	app.use(express.static(path.join(__dirname, 'public')));

}


exports.start = start;