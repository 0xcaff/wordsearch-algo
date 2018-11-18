export interface Position {
  colIdx: number;
  rowIdx: number;
}

export type Displacement = Position;

export const Directions: Displacement[] = [
  { colIdx: -1, rowIdx: 1 }, // Top Left
  { colIdx: 0, rowIdx: 1 }, // Top Center
  { colIdx: 1, rowIdx: 1 }, // Top Right
  { colIdx: 1, rowIdx: 0 }, // Right Center
  { colIdx: 1, rowIdx: -1 }, // Bottom Right
  { colIdx: 0, rowIdx: -1 }, // Bottom Center
  { colIdx: -1, rowIdx: -1 }, // Bottom Left
  { colIdx: -1, rowIdx: 0 } // Left Center
];
