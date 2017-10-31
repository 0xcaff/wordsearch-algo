// Internet famous clickbait wordsearch.
// Source: https://www.indy100.com/article/one-word-word-search-dog-7488706

const rows = `\
DGOODDODGOODDO
ODOOGGGDODGOGG
OGOGDOODGOODDD
DGDOOOGGOOGDGO
OGDGOGDGOGGOGD
DDDGDDODOOGDOO
ODGOGGDOOGGOOD`.split('\n');

const words = [
  "DOG"
];

module.exports = { words, rows };
