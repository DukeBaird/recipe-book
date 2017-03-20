var recipeFunctions = require('../../build/lib/recipeFunctions.js');

require('../../build/models/recipe.js');

var chai = require('chai');
var sinon = require('sinon');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var should = chai.should();
var expect = chai.expect;
var proxyquire = require('proxyquire').noPreserveCache();
var async = require('async');


var mockgoose = require('mockgoose');
mockgoose(mongoose);
var Recipe = mongoose.model('Recipe');

// Load Data Files
var testData = require('../testData.js');

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

		beforeEach('Pre-populate mocked database', function(done) {
			this.timeout(10000);
			Recipe.create(testData.recipeData, done);
		});

		it('should be able to create new recipes', function(done) {
			recipeFunctions.newRecipe({
				name: 'food',
				classification: 'also food',
				tags: ['test'],
				instructions: 'eat it',
				ingredients: [{
					name: 'edible',
					amount: 1,
					amountType: 'quantity'
				}]
			}).then(function(recipe) {
				recipe._id.should.exist;
				Recipe.findOne({name: 'food'}).then(function(result) {
					result.should.exist;
					expect(recipe._id).to.equal(result._id);
					done();
				});
			});
		});

		it('Should return a recipe by name if it exists', function(done) {
			recipeFunctions.getRecipeByName(testData.recipe_name).then(function(result) {
				result.should.exist;
				expect(result.name).to.equal(testData.recipeData.name);
				done();
			});
		});

		it('Should return null if it does not exist', function(done) {
			recipeFunctions.getRecipeByName('LoremIpsum').then(function(result) {
				expect(result).to.not.exist;
				done();
			});
		});

		it('Should return recipies by classification', function(done) {
			recipeFunctions.getRecipesByClassification(testData.recipe_classification).then(function(result) {
				expect(result.length).to.equal(1);
				expect(result[0].classification).to.equal(testData.recipe_classification);
				done();
			});
		});

		it('Should return recipies by classification up to a given limit', function(done) {
			Recipe.create({
				_id: '1111',
				name: 'food',
				classification: testData.recipe_classification,
				tags: ['test'],
				instructions: 'eat it',
				ingredients: [{
					name: 'edible',
					amount: 1,
					amountType: 'quantity'
				}]
			}).then(function() {
				recipeFunctions.getRecipesByClassification(testData.recipe_classification, 1).then(function(result) {
					expect(result.length).to.equal(1);
					done();
				});
			});
		});

	});

});