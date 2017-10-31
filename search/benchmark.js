/* eslint-disable no-console */

const { Suite } = require('benchmark');
const { solve, Directions } = require('../');
const algorithms = require('./algorithms');
const puzzles = require('../data');

const suite = new Suite();

algorithms.forEach(({ name: algoName, f: findMatches }) => {
  Object.entries(puzzles)
    .forEach(([ puzzleName, { words, rows } ]) =>
      suite.add(`solving ${puzzleName} puzzle using ${algoName} algorithm`, () => {
        solve(rows, words, Directions, findMatches);
      }),
    );
});

suite.on('cycle', (evt) => {
  console.log(evt.target.toString());
});

// TODO: Print Full Report

suite.run();
