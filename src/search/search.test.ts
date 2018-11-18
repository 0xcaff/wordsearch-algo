import { Directions, puzzles } from "../";
import algorithms from "./algorithms";

algorithms.forEach(algorithm =>
  describe(`${algorithm.name} solver`, () =>
    puzzles.forEach(puzzle =>
      it(`should solve the ${puzzle.name} puzzle`, () => {
        const matches = algorithm.fn(puzzle.rows, puzzle.words, Directions);

        expect(matches.map(match => match.word)).toEqual(
          expect.arrayContaining(puzzle.words)
        );
      })
    ))
);
