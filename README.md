# n-podcast-mapping

Aggregated metadata and associated data for podcasts.

## Installation

```
npm install --save Financial-Times/n-podcast-mapping
```

## Usage

```js
var podcastMapping = require('n-podcast-mapping');

// Get an array of external URLs for the given show slug
var urls = podcastMapping.linksFor('ft-alphachat');

console.log(urls); // [ 'https://itunes', 'http://soundcloud' ]

// Get an array of tags associated to the given show slug
var tags = podcastMapping.metadataFor('ft-banking-weekly');

console.log(tags); // [ { id: "…", name: "…", taxonomy: "…" }, {…} ]
```
