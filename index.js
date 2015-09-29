'use strict';

var data = require('./data');

module.exports.metadataFor = function(slug) {
	if (!data.hasOwnProperty(slug)) {
		return [];
	}

	var keys = ['taxonomy', 'name', 'id'];

	return data[slug].tags.map(function(tag) {
		return tag.reduce(function(map, value, i) {
			map[keys[i]] = value;
			return map;
		}, {});
	});

};

module.exports.linksFor = function(slug) {
	if (!data.hasOwnProperty(slug)) {
		return [];
	}

	return data[slug].links;
};
