import { solve, Directions, puzzles } from '../';
import algorithms from './algorithms';

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
