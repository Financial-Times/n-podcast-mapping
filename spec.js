'use strict';

var assert = require('assert');
var subject = require('./index');
var data = require('./data');

describe('Podcast Mapping', function() {

	describe('.uniqueTags()', function() {

		it('returns a de-duplicated array of all the tags used by the shows', function() {
			var result = subject.uniqueTags();
			var resultIds = result.map(tag => tag.id);

			resultIds.forEach(function(tagId, i) {
				assert.equal(resultIds.indexOf(tagId), i);
			});
		});

		it('maps keys to each tag', function() {
			var result = subject.primaryTags();

			result.forEach(function(tag) {
				var keys = Object.keys(tag);

				assert.equal(keys.indexOf('taxonomy'), 2);
				assert.equal(keys.indexOf('name'), 1);
				assert.equal(keys.indexOf('id'), 0);
			});
		});

	});

	describe('.primaryTags()', function() {

		it('returns an array of primary sections used by each show', function() {
			var result = subject.primaryTags();

			assert.equal(result.length, Object.keys(data).length);

			result.forEach(function(tag) {
				assert.equal(tag.taxonomy, 'primarySection');
			});
		});

		it('maps keys to each tag', function() {
			var result = subject.primaryTags();

			result.forEach(function(tag) {
				var keys = Object.keys(tag);

				assert.equal(keys.indexOf('taxonomy'), 2);
				assert.equal(keys.indexOf('name'), 1);
				assert.equal(keys.indexOf('id'), 0);
			});
		});

	});

	describe('.metadataFor()', function() {

		context('Success', function() {

			it('returns an array of tags for the given show', function() {
				var result = subject.metadataFor('ft-news');

				assert.ok(Array.isArray(result));
				assert.equal(result.length, 2);
			});

			it('maps keys to each tag', function() {
				var result = subject.metadataFor('ft-news');

				result.forEach(function(tag) {
					var keys = Object.keys(tag);

					assert.equal(keys.indexOf('taxonomy'), 2);
					assert.equal(keys.indexOf('name'), 1);
					assert.equal(keys.indexOf('id'), 0);
				});
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

			it('returns an array of external links for the given show', function() {
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

	describe('.isThisTagAPodcast()', function() {

		it('returns true if the given tag ID is a primary tag', function() {
			var result = subject.isThisTagAPodcast('NzA0NWQ2OTUtNDdhZC00ZGMxLWI4MGEtODZkYTY5MjQ0ZTk1-QnJhbmRz');

			assert.ok(typeof result, 'boolean');
			assert.equal(result, true);
		});

		it('returns false if the given tag ID is not a primary tag', function() {
			var result = subject.isThisTagAPodcast('MTQ4-U2VjdGlvbnM=');

			assert.ok(typeof result, 'boolean');
			assert.equal(result, false);
		});

	});

});
