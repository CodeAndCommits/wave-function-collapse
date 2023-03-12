import { PossibleElementGrid } from "./grid";
import { Direction, Element, resolvedElements } from "./tiles";

export type Coordinates = [number, number]

export function getOppositeDirection(direction: Direction): Direction {
  switch (direction) {
    case "north":
      return "south";
    case "east":
      return "west";
    case "south":
      return "north";
    case "west":
      return "east";
  }
}

export function getSmallestEntropy(grid: PossibleElementGrid): Coordinates[] {
  let lowestAmount = Infinity;
  let lowestCoords: Coordinates[] = [];

  grid.forEach((row, y) => {
    row.forEach((cell, x) => {

      const size = new Set(cell).size

      if (size <= 1) {
        return;
      }

      if (size === lowestAmount) {
        lowestCoords.push([x, y]);
        return
      }

      if (size < lowestAmount) {
        lowestAmount = size;
        lowestCoords = [[x, y]];
      }
    });
  });

  return lowestCoords;
}

export function getNextCoordinate([x, y]: Coordinates, direction: Direction): Coordinates {
  switch (direction) {
    case "north":
      return [x, y - 1];
    case "east":
      return [x + 1, y];
    case "south":
      return [x, y + 1];
    case "west":
      return [x - 1, y];
  }
}

export function chooseRandomElementFromPossibilities(possibilities: Element[]) {
  return possibilities[Math.floor(Math.random() * possibilities.length)]
}
