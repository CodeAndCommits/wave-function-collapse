import { Element, Tile, resolvedElements, Direction, AllElements } from "./tiles";
import { Coordinates, getNewPossibilities, getSmallestEntropy } from "./utils";

export type PossibleElementGrid = Element[][][];

export type TileGrid = Tile[][];

export function newGrid(x: number, y: number): PossibleElementGrid {
  return new Array(y).fill(
    new Array(x).fill([...AllElements])
  );
}





function propagate(
  grid: PossibleElementGrid,
  [x, y]: Coordinates,
  currentTiles: Element[],
  checked: string[] = []
): PossibleElementGrid {
  checked.push(`${x},${y}`);

  // Propagate into each cardinal direction
  (["north", "south", "east", "west"] as Direction[]).forEach(
    (direction: Direction) => {
      let coords: Coordinates;
      switch (direction) {
        case "north":
          coords = [x, y - 1];
          break;
        case "east":
          coords = [x + 1, y];
          break;
        case "south":
          coords = [x, y + 1];
          break;
        case "west":
          coords = [x - 1, y];
          break;
      }

      const [nextX, nextY] = coords;
      console.log(`Checking ${direction} ${nextX}, ${nextY}`)

      // If already propagated to, skip
      if (checked.includes(`${nextX},${nextY}`)) {
        console.debug(`Already Checked ${nextX},${nextY}`)
        return;
      }

      // If no row / cell found, continue on
      if (!grid[nextY] || !grid[nextY][nextX]) {
        console.log(`Cell ${nextX},${nextY} Not found`)
        return;
      }

      const possibilities = grid[nextY][nextX];

      // Filter adjacent tiles possibilities based on current tiles possible connections

      const newPossibilities = getNewPossibilities(possibilities, currentTiles, direction);

      // If next and current are the same, no change. End propagation in this direction.
      if (newPossibilities == possibilities) {
        console.debug(`Both possibility lists are the same. No need to propagate further.`)
        return;
      }

      // Update grid possibilities
      grid[nextY][nextX] = newPossibilities;

      console.log(`Updated Possibilities for ${nextX},${nextY}`, newPossibilities)
      grid = propagate(grid, [nextX, nextY], newPossibilities, checked);
    }
  );

  console.debug(`Finished Propgating for ${x}, ${y}`)

    console.log(grid)

  return grid;
}

export function solve(grid: PossibleElementGrid): PossibleElementGrid {
  const locations = getSmallestEntropy(grid);

  console.log(`Found ${locations.length} with small entropy`)

  if (locations.length === 0) {
    console.log("No more locations found.");
    return grid;
  }

  const target = Math.floor(Math.random() * locations.length);
  const [x, y] = locations[target];

  console.log(`Processing ${x}, ${y}`);

  const location = grid[y][x];
  const tile = location[Math.floor(Math.random() * location.length)];

  grid[y][x] = [tile]

  const newGrid = propagate(grid, [x, y], [tile]);

  console.log(`Done Propagating for ${x}, ${y}`);

  return newGrid
}
