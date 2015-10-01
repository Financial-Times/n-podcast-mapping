'use strict';

var data = require('./data');

function pair(tag) {
	return {
		id: tag[2],
		name: tag[1],
		taxonomy: tag[0]
	};
}

module.exports.uniqueTags = function() {
	var uniqueTagList = [];
	var completeTagList = [];

	Object.keys(data).forEach(function(showName) {
		var show = data[showName];
		completeTagList = completeTagList.concat(show.tags);
	});

	return completeTagList
		.filter(function(tag) {
			var exists = uniqueTagList.find(uniqueTag => tag[2] === uniqueTag[2]);
			return !exists && uniqueTagList.push(tag);
		})
		.map(pair);
};

module.exports.primaryTags = function() {
	return Object.keys(data)
		.reduce(function(primaryTagList, showName) {
			var show = data[showName];

			primaryTagList = primaryTagList.concat(
				show.tags.filter(function(tag) {
					return tag[0] === 'primarySection';
				})
			);

			return primaryTagList;
		}, [])
		.map(pair);
};

module.exports.metadataFor = function(slug) {
	if (!data.hasOwnProperty(slug)) {
		return [];
	}

	return data[slug].tags.map(pair);
};

module.exports.linksFor = function(slug) {
	if (!data.hasOwnProperty(slug)) {
		return [];
	}

	return data[slug].links;
};
