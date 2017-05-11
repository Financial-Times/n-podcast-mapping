const assert = require('assert');
const subject = require('./index');
const data = require('./data');

describe('Podcast Mapping', () => {
	describe('.uniqueTags()', () => {
		it('returns a de-duplicated array of all the tags used by the shows', () => {
			const result = subject.uniqueTags();
			const resultIds = result.map(tag => tag.id);

			assert.ok(Array.isArray(result));
			assert.equal(result.length, 53);

			resultIds.forEach((tagId, i) => {
				assert.equal(resultIds.indexOf(tagId), i);
			});
		});

		it('maps keys to each tag', () => {
			const result = subject.primaryTags();

			result.forEach((tag) => {
				const keys = Object.keys(tag);

				assert.ok(Array.isArray(result));
				assert.equal(result.length, 30);

				assert.equal(keys.indexOf('taxonomy'), 2);
				assert.equal(keys.indexOf('name'), 1);
				assert.equal(keys.indexOf('id'), 0);
			});
		});
	});

	describe('.primaryTags()', () => {
		it('returns an array of primary sections used by each show', () => {
			const result = subject.primaryTags();

			assert.ok(Array.isArray(result));
			assert.equal(result.length, Object.keys(data).length);

			result.forEach((tag) => {
				assert.equal(tag.taxonomy, 'primarySection');
			});
		});

		it('maps keys to each tag', () => {
			const result = subject.primaryTags();

			result.forEach((tag) => {
				const keys = Object.keys(tag);

				assert.equal(keys.indexOf('taxonomy'), 2);
				assert.equal(keys.indexOf('name'), 1);
				assert.equal(keys.indexOf('id'), 0);
			});
		});
	});

	describe('.metadataFor()', () => {
		context('Success', () => {
			it('returns an array of tags for the given show', () => {
				const result = subject.metadataFor('ft-news');

				assert.ok(Array.isArray(result));
				assert.equal(result.length, 2);
			});

			it('maps keys to each tag', () => {
				const result = subject.metadataFor('ft-news');

				result.forEach((tag) => {
					const keys = Object.keys(tag);

					assert.equal(keys.indexOf('taxonomy'), 2);
					assert.equal(keys.indexOf('name'), 1);
					assert.equal(keys.indexOf('id'), 0);
				});
			});
		});

		context('Failure', () => {
			it('returns an empty array', () => {
				const result = subject.metadataFor('a-non-existent-show');

				assert.ok(Array.isArray(result));
				assert.equal(result.length, 0);
			});
		});
	});

	describe('.annotationsFor()', () => {
		context('Success', () => {
			it('returns an array of annotations for the given show', () => {
				const result = subject.annotationsFor('ft-news');

				assert.ok(Array.isArray(result));
				assert.equal(result.length, 2);
			});

			it('returns all information about every tag', () => {
				const result = subject.annotationsFor('ft-news');

				result.forEach((concept) => {
					const keys = Object.keys(concept);

					assert.ok(keys.includes('id'));
					assert.ok(keys.includes('apiUrl'));
					assert.ok(keys.includes('prefLabel'));
					assert.ok(keys.includes('types'));
					assert.ok(keys.includes('directType'));
					assert.ok(keys.includes('predicate'));
					assert.ok(keys.includes('type'));
				});
			});
		});

		context('Failure', () => {
			it('returns an empty array', () => {
				const result = subject.annotationsFor('a-non-existent-show');

				assert.ok(Array.isArray(result));
				assert.equal(result.length, 0);
			});
		});
	});

	describe('.linksFor()', () => {
		context('Success', () => {
			it('returns an array of external links for the given show', () => {
				const result = subject.linksFor('ft-news');

				assert.ok(Array.isArray(result));
				assert.equal(result.length, 5);
			});
		});

		context('Failure', () => {
			it('returns an empty array', () => {
				const result = subject.linksFor('a-non-existent-show');

				assert.ok(Array.isArray(result));
				assert.equal(result.length, 0);
			});
		});
	});

	describe('.isThisTagAPodcast()', () => {
		it('returns true if the given tag ID is a primary tag', () => {
			const result = subject.isThisTagAPodcast('NzA0NWQ2OTUtNDdhZC00ZGMxLWI4MGEtODZkYTY5MjQ0ZTk1-QnJhbmRz');

			assert.ok(typeof result, 'boolean');
			assert.equal(result, true);
		});

		it('returns false if the given tag ID is not a primary tag', () => {
			const result = subject.isThisTagAPodcast('MTQ4-U2VjdGlvbnM=');

			assert.ok(typeof result, 'boolean');
			assert.equal(result, false);
		});
	});
});
