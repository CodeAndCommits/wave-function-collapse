import { afterEach, describe, expect, expectTypeOf, it, vi } from "vitest";
import { Direction, Element } from "./tiles";
import { chooseRandomElementFromPossibilities, getNextCoordinate, getOppositeDirection, getSmallestEntropy } from "./utils";

describe(`getOppositeDirection()`, () => {
  it.each([
    { input: "north", expected: "south" },
    { input: "east", expected: "west" },
    { input: "south", expected: "north" },
    { input: "west", expected: "east" },
  ])("getOppositeDirection(%s) -> %s", async ({ input, expected }) => {
    expectTypeOf(input as Direction).toMatchTypeOf<Direction>;
    expect(getOppositeDirection(input as Direction)).toBe(expected);
  });
});

describe('getSmallestEntropy()', () => {
  it('returns an empty list of coordinates if no elements', async () => {
    expect(getSmallestEntropy([])).toEqual([])
  })

  it('considers a single value in a cell as resolved', async () => {
    expect(getSmallestEntropy([
      [
        [Element.NOTHING],
        [Element.NOTHING],
      ],
      [
        [Element.NOTHING],
        [Element.NOTHING],
      ],
    ])).toEqual([])
  })

  it('returns a list of coordinates of lowest possible entropy', async () => {
    expect(getSmallestEntropy([
      [
        [Element.NOTHING,Element.GRASS, Element.EDGE_LEFT],
        [Element.NOTHING,Element.GRASS],
        [Element.NOTHING,Element.GRASS],
        [Element.NOTHING,Element.GRASS, Element.EDGE_LEFT],
      ],
      [
        [Element.NOTHING,Element.GRASS],
        [Element.NOTHING,Element.GRASS, Element.EDGE_LEFT],
        [Element.NOTHING,Element.GRASS, Element.EDGE_LEFT],
        [Element.NOTHING,Element.GRASS],
      ]
    ])).toEqual([[1, 0], [2, 0], [0, 1], [3, 1]])
  })
})

describe('getNextCoordinate()', () => {
  it('returns y - 1 for north', async () => {
    expect(getNextCoordinate([0, 0], 'north')).toStrictEqual([0, -1])
  })
  it('returns y + 1 for south', async () => {
    expect(getNextCoordinate([0, 0], 'south')).toStrictEqual([0, 1])
  })
  it('returns x + 1 for east', async () => {
    expect(getNextCoordinate([0, 0], 'east')).toStrictEqual([1, 0])
  })
  it('returns x - 1 for west', async () => {
    expect(getNextCoordinate([0, 0], 'west')).toStrictEqual([-1, 0])
  })
})

describe('chooseRandomElementFromPossibilities()', () => {
  let mathRandom = Math.random

  afterEach(() => {
    Math.random = mathRandom
  })


  it('returns the lowest element from a list', async () => {
    Math.random = vi.fn(() => 0)

    expect(chooseRandomElementFromPossibilities([Element.NOTHING, Element.GRASS])).toBe(Element.NOTHING)
  })

  it('returns the highest element from a list', async () => {
    Math.random = vi.fn(() => 0.99)

    expect(chooseRandomElementFromPossibilities([Element.NOTHING, Element.GRASS])).toBe(Element.GRASS)
  })
})
