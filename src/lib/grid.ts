import {
  Element,
  Tile,
  resolvedElements,
  Direction,
  AllElements,
} from "./tiles";
import {
  chooseRandomElementFromPossibilities,
  Coordinates,
  getNextCoordinate,
  getSmallestEntropy,
} from "./utils";

export type PossibleElementGrid = Element[][][];

export type TileGrid = Tile[][];

const CardinalDirections: Direction[] = ["north", "east", "south", "west"];

export function newGrid(x: number, y: number): PossibleElementGrid {
  const grid = [];

  for (let yi = 0; yi < y; yi++) {
    const row = [];
    for (let xi = 0; xi < x; xi++) {
      row.push([...AllElements]);
    }
    grid.push(row);
  }

  return grid;
}

export function propagate(
  grid: PossibleElementGrid,
  [x, y]: Coordinates,
): PossibleElementGrid {
  let currentTiles = [...grid[y][x]];

  CardinalDirections.forEach((direction) => {
    const [nextX, nextY] = getNextCoordinate([x, y], direction);

    // If no row / cell found, continue on
    if (!grid[nextY] || !grid[nextY][nextX]) {
      return;
    }

    let otherTiles = [...grid[nextY][nextX]];

    let changes = false;
    otherTiles = otherTiles.filter((otherTile) => {
      const found = currentTiles.some((currentTile) => {
        const possibleConnections =
          resolvedElements[currentTile]?.possibleConnections[direction];
        const found = possibleConnections?.includes(otherTile);

        return found;
      });

      if (!found) {
        changes = true;
        return false;
      }

      return true;
    });

    if (changes) {
      grid[nextY][nextX] = otherTiles;
      grid = propagate(grid, [nextX, nextY]);
    }
  });

  grid[y][x] = [...currentTiles];

  return grid;
}

export function solve(grid: PossibleElementGrid): PossibleElementGrid | false {
  const locations = getSmallestEntropy(grid);

  if (locations.length === 0) {
    return false;
  }

  const target = Math.floor(Math.random() * locations.length);
  const [x, y] = locations[target];

  const location = grid[y][x];
  const tile = chooseRandomElementFromPossibilities(location);

  grid[y][x] = [tile];

  const newGrid = propagate(grid, [x, y]);

  return newGrid;
}
