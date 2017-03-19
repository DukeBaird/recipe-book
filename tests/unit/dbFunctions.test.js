var recipeFunctions = require('../../build/lib/recipeFunctions.js');

require('../../build/models/recipe.js');

var chai = require('chai');
var sinon = require('sinon');
var mongoose = require('mongoose');

var should = chai.should();
var expect = chai.expect;
var proxyquire = require('proxyquire').noPreserveCache();
var async = require('async');


var mockgoose = require('mockgoose');
mockgoose(mongoose);
var Recipe = mongoose.model('Recipe');

before('Connect to the mocked database', function(done) {
	this.timeout(120000);
	mongoose.connect('mongodb://fake.test/TestingDB', function(err) {
		if (err) {
			console.log(err);
		}
		var admin = new mongoose.mongo.Admin(mongoose.connection.db);
		admin.buildInfo(function (err, info) {
			console.log('Mongo Version: ', info.version);
			done(err);
		});
	});
});

afterEach('Clear the database', function(done) {
	this.timeout(10000);
	mockgoose.reset(done);
});

describe('Database Functions', function() {

	describe('recipe functions:', function() {

		beforeEach('Reset the database', function(done) {
			mockgoose.reset(done);
		});

	});

	it('should pass', function() {
		expect(2).to.equal(2);
	});
});