const { findMatches: findMatchesBruteForce } = require('./force');
const { findMatches: findMatchesPrefixTable } = require('./prefix');

module.exports = [
  { name: 'brute force', f: findMatchesBruteForce },
  { name: 'prefix table', f: findMatchesPrefixTable },
];
