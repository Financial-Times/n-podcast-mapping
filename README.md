# n-podcast-mapping

Aggregated metadata and associated data for podcasts.

## Installation

```
npm install --save Financial-Times/n-podcast-mapping
```

## Usage

```js
var podcastMapping = require('n-podcast-mapping');

// returns an array of external links for the given show
var urls = podcastMapping.linksFor('ft-alphachat');

console.log(urls); // [ 'https://itunes', 'http://soundcloud' ]

// returns an array of tags for the given show
var tags = podcastMapping.metadataFor('ft-banking-weekly');

console.log(tags); // [ { id: "…", name: "…", taxonomy: "…" }, {…} ]

// returns an array of primary sections used by each show
var primaryTags = podcastMapping.primaryTags();

console.log(primaryTags); // [ { id: "…", name: "…", taxonomy: "…" }, {…} ]

// returns a de-duplicated array of all the tags used by the shows
var uniqueTags = podcastMapping.uniqueTags();

console.log(uniqueTags); // [ { id: "…", name: "…", taxonomy: "…" }, {…} ]

// check if a tag ID is a type of podcast
var tagId = 'NzA0NWQ2OTUtNDdhZC00ZGMxLWI4MGEtODZkYTY5MjQ0ZTk1-QnJhbmRz';

console.log(podcastMapping.isThisTagAPodcast(tagId)); // true
```
