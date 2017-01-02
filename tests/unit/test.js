
var recipeFunctions = require('../../build/lib/recipeFunctions.js');

require('../../build/models/recipe.js');

var chai = require('chai');
var sinon = require('sinon');
var mongoose = require('mongoose');

var should = chai.should();
var expect = chai.expect;

var proxyquire = require('proxyquire').noPreserveCache();

var mockgoose = require('mockgoose');
mockgoose(mongoose);

var Recipe = mongoose.model('Recipe');

describe('default functions', function() {
	it('should pass', function() {
		expect(2).to.equal(2);
	});

	it('should fail', function() {
		expect(2).to.equal(3);
	});
});