const { findMatches: defaultFindMatches } = require('./search/force');
const { ArrayGrid } = require('./grid');
const { Directions } = require('./directions');
const { CharNode } = require('./graph');

const buildGrid = (rows) => {
  const nodeRows = rows.map(row =>
    row
      .split("")
      .map(khar => new CharNode(khar))
  );

  const grid = ArrayGrid.fromArray(nodeRows);

  return grid;
};

function solve(
  rows,
  words,
  allowedDirections = Directions,
  findMatches = defaultFindMatches,
) {
  const grid = buildGrid(rows);

  // solve
  const matches = findMatches(words, grid, allowedDirections);

  return { matches, grid };
}

module.exports = { buildGrid, solve };
