import * as states from "./states";
import * as valentine from "./valentine";
import * as dog from "./dog";
import * as artists from "./artists";

interface Puzzle {
  name: string;
  rows: string[];
  words: string[];
}

const puzzles: Puzzle[] = [states, valentine, dog, artists];

export default puzzles;
