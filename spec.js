'use strict';

var assert = require('assert');
var subject = require('./index');

describe('Podcast Mapping', function() {

	describe('.metadataFor()', function() {

		context('Success', function() {

			it('returns an array of tags for the given show', function() {
				var result = subject.metadataFor('ft-news');

				assert.ok(Array.isArray(result));
				assert.equal(result.length, 2);
			});

			it('maps keys to each tag', function() {
				var result = subject.metadataFor('ft-news');
				var keys = Object.keys(result[0]);

				assert.equal(keys.indexOf('taxonomy'), 0);
				assert.equal(keys.indexOf('name'), 1);
				assert.equal(keys.indexOf('id'), 2);
			});

		});

		context('Failure', function() {

			it('returns an empty array', function() {
				var result = subject.metadataFor('a-non-existent-show');

				assert.ok(Array.isArray(result));
				assert.equal(result.length, 0);
			});

		});

	});

	describe('.linksFor()', function() {

		context('Success', function() {

			it('returns an array of tags for the given show', function() {
				var result = subject.linksFor('ft-news');

				assert.ok(Array.isArray(result));
				assert.equal(result.length, 5);
			});

		});

		context('Failure', function() {

			it('returns an empty array', function() {
				var result = subject.linksFor('a-non-existent-show');

				assert.ok(Array.isArray(result));
				assert.equal(result.length, 0);
			});

		});

	});

});
