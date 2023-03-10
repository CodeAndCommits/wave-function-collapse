import { describe, expect, expectTypeOf, it } from "vitest";
import { AllElements, Direction, Element } from "./tiles";
import { getNewPossibilities, getOppositeDirection, getSmallestEntropy } from "./utils";

describe(`getOppositeDirection()`, () => {
  it.each([
    { input: "north", expected: "south" },
    { input: "east", expected: "west" },
    { input: "south", expected: "north" },
    { input: "west", expected: "east" },
  ])("getOppositeDirection(%s) -> %s", async ({ input, expected }) => {
    expectTypeOf(input).toMatchTypeOf<Direction>;
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

describe(`getNewPossibilities()`, () => {
  it('returns grass and top center edge for grass tile going north', async () => {
    expect(getNewPossibilities([...AllElements], [Element.GRASS], 'north')).toEqual(expect.arrayContaining([Element.GRASS, Element.EDGE_TOP_CENTER]))
  })
  it('returns grass, right edge, top center and top right for grass tile and right edge going north', async () => {
    expect(getNewPossibilities([...AllElements], [Element.GRASS, Element.EDGE_RIGHT], 'north')).toEqual(expect.arrayContaining([Element.GRASS, Element.EDGE_TOP_CENTER, Element.EDGE_TOP_RIGHT, Element.EDGE_RIGHT]))
  })

  it('returns grass, right edge, bottom center and bottom right for grass tile and right edge going south', async () => {
    expect(getNewPossibilities([...AllElements], [Element.GRASS, Element.EDGE_RIGHT], 'south')).toEqual(expect.arrayContaining([Element.GRASS, Element.EDGE_BOTTOM_CENTER, Element.EDGE_BOTTOM_RIGHT, Element.EDGE_RIGHT]))
  })
})
