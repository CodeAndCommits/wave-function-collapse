import { beforeAll, beforeEach, describe, expect, it } from "vitest";
import { newGrid, PossibleElementGrid, propagate } from "./grid";
import { Element } from "./tiles";

describe('propagate()', () => {
    it('it propagates in a 2x2 grid', () => {
        let grid = newGrid(2, 2)

        grid[0][0] = [Element.EDGE_TOP_LEFT]

        const updateGrid = propagate(grid, [0, 0])

        console.log(updateGrid)

        expect(updateGrid[0][0]).toEqual(expect.arrayContaining([Element.EDGE_TOP_LEFT]))
        expect(updateGrid[0][1]).toEqual(expect.arrayContaining([Element.EDGE_TOP_RIGHT, Element.EDGE_TOP_CENTER]))
        expect(updateGrid[1][0]).toEqual(expect.arrayContaining([Element.EDGE_BOTTOM_LEFT, Element.EDGE_LEFT]))
        expect(updateGrid[1][1]).toEqual(expect.arrayContaining([Element.GRASS, Element.EDGE_RIGHT, Element.EDGE_BOTTOM_CENTER, Element.EDGE_BOTTOM_RIGHT]))
    })
})
