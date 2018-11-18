import { Directions, puzzles } from "../";
import algorithms from "./algorithms";

algorithms.forEach(algorithm =>
  describe(`${algorithm.name} solver`, () =>
    puzzles.forEach(puzzle =>
      it(`should solve the ${puzzle.name} puzzle`, () => {
        const matches = algorithm.fn(puzzle.rows, puzzle.words, Directions);

        expect(new Set(matches.map(match => match.word))).toEqual(
          new Set(puzzle.words)
        );
      })
    ))
);
