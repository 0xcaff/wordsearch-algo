const { solve, Directions } = require('../');
const algorithms = require('./algorithms');
const puzzles = require('../data');

algorithms.forEach(({ name, f: findMatches }) => {
  describe(`${name} solver`, () => {
    Object.entries(puzzles)
      .forEach(([name, { words, rows } ]) =>
        it(`should solve the ${name} puzzle`, () => {
          const { matches } = solve(rows, words, Directions, findMatches);

          expect(Object.keys(matches)).toHaveLength(words.length);
        })
      );
  });
});
