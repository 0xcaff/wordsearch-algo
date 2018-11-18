import { Suite } from "benchmark";
import { Directions, puzzles } from "../";
import algorithms from "./algorithms";

const suite = new Suite();

algorithms.forEach(algorithm =>
  puzzles.forEach(puzzle =>
    suite.add(
      `solving ${puzzle.name} puzzle using ${algorithm.name} algorithm`,
      () => algorithm.fn(puzzle.rows, puzzle.words, Directions)
    )
  )
);

suite.on("cycle", (evt: any) => console.log(evt.target.toString()));

// TODO: Print Full Report

suite.run();
