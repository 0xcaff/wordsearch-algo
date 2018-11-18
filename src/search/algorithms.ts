import { findMatches as findMatchesBruteForce } from "./force";
import { findMatches as findMatchesPrefixTrie } from "./prefix";
import { Displacement, Position } from "../directions";

export interface Match {
  word: string;
  start: Position;
  end: Position;
}

interface SolverFn {
  (rows: string[], words: string[], direction: Displacement[]): Match[];
}

interface Algorithm {
  name: string;
  fn: SolverFn;
}

const algorithms: Algorithm[] = [
  { name: "brute force", fn: findMatchesBruteForce },
  { name: "prefix trie", fn: findMatchesPrefixTrie }
];

export default algorithms;
