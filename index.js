const data = require('./data');

const pair = ([ taxonomy, name, id ]) => {
	return { id, name, taxonomy };
};

module.exports.uniqueTags = function () {
	const unique = new Map();

	Object.keys(data).forEach((show) => {
		data[show].tags.forEach((tag) => {
			const tagId = tag[2];

			if (!unique.has(tagId)) {
				unique.set(tagId, tag);
			}
		});
	});

	return Array.from(unique.values()).map(pair);
};

module.exports.primaryTags = function () {
	const primaryTags = [];

	Object.keys(data).forEach((show) => {
		data[show].tags.forEach((tag) => {
			const taxonomy = tag[0];

			if (taxonomy === 'primarySection') {
				primaryTags.push(tag);
			}
		})
	});

	return primaryTags.map(pair);
};

module.exports.metadataFor = function (show) {
	if (!data.hasOwnProperty(show)) {
		return [];
	}

	return data[show].tags.map(pair);
};

module.exports.annotationsFor = function (show) {
	if (!data.hasOwnProperty(show)) {
		return [];
	}

	return data[show].annotations;
};

module.exports.linksFor = function (show) {
	if (!data.hasOwnProperty(show)) {
		return [];
	}

	return data[show].links;
};

module.exports.isThisTagAPodcast = function (tagId) {
	const podcastTags = this.primaryTags();
	return podcastTags.some((tag) => tag.id === tagId);
};
