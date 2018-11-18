import { Match } from "./algorithms";
import { Directions, Displacement } from "../directions";
import { TrieNode } from "./trie";

export function findMatches(
  rows: string[],
  words: string[],
  directions: Displacement[] = Directions
): Match[] {
  const trie = new TrieNode();
  for (const word of words) {
    trie.add(word);
  }

  const matches: Match[] = [];

  for (let startRowIdx = 0; startRowIdx < rows.length; startRowIdx++) {
    const row = rows[startRowIdx];
    for (let startColIdx = 0; startColIdx < row.length; startColIdx++) {
      for (const direction of directions) {
        let rowIdx = startRowIdx;
        let colIdx = startColIdx;
        let seen = "";

        while (
          rowIdx >= 0 &&
          rowIdx < rows.length &&
          colIdx >= 0 &&
          colIdx < rows[rowIdx].length
        ) {
          seen += rows[rowIdx][colIdx];
          const result = trie.isPrefix(seen);

          if (result === null) {
            break;
          }

          if (result.isComplete) {
            matches.push({
              word: seen,
              start: { rowIdx: startRowIdx, colIdx: startColIdx },
              end: { rowIdx, colIdx }
            });
          }

          if (!result.hasMore) {
            break;
          }

          rowIdx += direction.rowIdx;
          colIdx += direction.colIdx;
        }
      }
    }
  }

  return matches;
}
