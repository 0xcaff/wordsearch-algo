import { Displacement, Directions } from "../directions";
import { Match } from "./algorithms";

// A brute force algorithm for finding the solutions of a wordsearch. The worst
// case complexity of this algorithm is O(n * w * l) where n is the number of
// nodes in the graph, w is the number of words we are searching for and l is
// the average length of the word we are searching for.
export function findMatches(
  rows: string[],
  words: string[],
  directions: Displacement[] = Directions
) {
  const matches: Match[] = [];

  for (let rowIdx = 0; rowIdx < rows.length; rowIdx++) {
    const row = rows[rowIdx];
    for (let colIdx = 0; colIdx < row.length; colIdx++) {
      for (const direction of directions) {
        for (const word of words) {
          const match = tryMatch(rows, rowIdx, colIdx, word, direction);
          if (match === null) {
            continue;
          }

          matches.push(match);
        }
      }
    }
  }

  return matches;
}

function tryMatch(
  rows: string[],
  startRowIdx: number,
  startColIdx: number,
  word: string,
  direction: Displacement
): Match | null {
  for (let idx = 0; idx < word.length; idx++) {
    let rowIdx = startRowIdx + idx * direction.colIdx;
    let colIdx = startColIdx + idx * direction.rowIdx;

    if (
      rowIdx < 0 ||
      rowIdx >= rows.length ||
      colIdx < 0 ||
      colIdx >= rows[rowIdx].length
    ) {
      return null;
    }

    const current = word.charAt(idx);
    const got = rows[rowIdx].charAt(colIdx);
    if (got !== current) {
      return null;
    }
  }

  return {
    word,
    start: { colIdx: startRowIdx, rowIdx: startColIdx },
    end: {
      colIdx: startRowIdx + (word.length - 1) * direction.colIdx,
      rowIdx: startColIdx + (word.length - 1) * direction.rowIdx
    }
  };
}
