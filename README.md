# n-podcast-mapping

Aggregated metadata and associated data for podcasts.

## Installation

```
npm install -S @financial-times/n-podcast-mapping
```

## Usage

```js
const podcasts = require('@financial-times/n-podcast-mapping');

// returns an array of external links for the given show
const urls = podcasts.linksFor('ft-alphachat');

console.log(urls); // [ 'https://itunes', 'http://soundcloud' ]

// returns an array of TME tags for the given show
const tags = podcasts.metadataFor('ft-banking-weekly');

console.log(tags); // [ { id: "…", name: "…", taxonomy: "…" }, {…} ]

// returns an array of primary TME tags used by each show
const primaryTags = podcasts.primaryTags();

console.log(primaryTags); // [ { id: "…", name: "…", taxonomy: "…" }, {…} ]

// returns a de-duplicated array of all the TME tags used by the shows
const uniqueTags = podcasts.uniqueTags();

console.log(uniqueTags); // [ { id: "…", name: "…", taxonomy: "…" }, {…} ]

// check if a tag ID is a type of podcast
const tagId = 'NzA0NWQ2OTUtNDdhZC00ZGMxLWI4MGEtODZkYTY5MjQ0ZTk1-QnJhbmRz';

console.log(podcasts.isThisTagAPodcast(tagId)); // true

// returns an array of concept annotations for the given show
const annotations = podcasts.annotationsFor('ft-arts');

console.log(annotations); // [ { id: "…", prefLabel: "…", predicate: "…" }, {…} ]
```
