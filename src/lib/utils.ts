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
      if (cell.length <= 1) {
        return;
      }

      if (cell.length === lowestAmount) {
        lowestCoords.push([x, y]);
        return
      }

      if (cell.length < lowestAmount) {
        lowestAmount = cell.length;
        lowestCoords = [[x, y]];
      }
    });
  });

  return lowestCoords;
}

export function getNewPossibilities(possibilities: Element[], currentTiles: Element[], direction: Direction): Element[] {
  const newPossibilities: Element[] = []

  currentTiles.forEach((tile) => {
      possibilities.forEach((possibility) => {
        if (resolvedElements[tile]?.possibleConnections[direction].includes(possibility)) {
          newPossibilities.push(possibility)
        }
      })
    });

    if (newPossibilities.length === 0) {
      throw Error(`Possibilities should never reach 0. ${currentTiles.join(',')} -> ${possibilities.join(',')}`)
    }

    return newPossibilities;
}
