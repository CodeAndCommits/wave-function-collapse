import { ReactNode } from "react";
import { EdgeBottom } from "../tiles/EdgeBottom";
import { EdgeBottomLeft } from "../tiles/EdgeBottomLeft";
import { EdgeBottomRight } from "../tiles/EdgeBottomRight";
import { EdgeInnerBottomLeft } from "../tiles/EdgeInnerBottomLeft";
import { EdgeInnerBottomRight } from "../tiles/EdgeInnerBottomRight";
import { EdgeInnerTopLeft } from "../tiles/EdgeInnerTopLeft";
import { EdgeInnerTopRight } from "../tiles/EdgeInnerTopRight";
import { EdgeLeft } from "../tiles/EdgeLeft";
import { EdgeRight } from "../tiles/EdgeRight";
import { EdgeTop } from "../tiles/EdgeTop";
import { EdgeTopLeft } from "../tiles/EdgeTopLeft";
import { EdgeTopRight } from "../tiles/EdgeTopRight";
import { Grass } from "../tiles/Grass";
import { Nothing } from "../tiles/Nothing";
import { TileProps } from "../tiles/Tile";
import { getOppositeDirection } from "./utils";

export enum Element {
  NOTHING,
  GRASS,
  EDGE_TOP_LEFT,
  EDGE_TOP_CENTER,
  EDGE_TOP_RIGHT,
  EDGE_LEFT,
  EDGE_RIGHT,
  EDGE_BOTTOM_LEFT,
  EDGE_BOTTOM_CENTER,
  EDGE_BOTTOM_RIGHT,
  EDGE_INNER_TOP_LEFT,
  EDGE_INNER_TOP_RIGHT,
  EDGE_INNER_BOTTOM_LEFT,
  EDGE_INNER_BOTTOM_RIGHT,
}

export const AllElements: Element[] =
  [
    // Add weight to space elements
    Element.NOTHING,
    Element.NOTHING,
    Element.NOTHING,
    Element.NOTHING,
    Element.NOTHING,
    Element.NOTHING,
    Element.NOTHING,
    Element.NOTHING,
    Element.NOTHING,
    Element.NOTHING,
    Element.NOTHING,
    Element.NOTHING,
    Element.GRASS,
    Element.GRASS,
    Element.GRASS,
    Element.GRASS,
    Element.GRASS,
    Element.GRASS,
    Element.GRASS,
    Element.GRASS,
    Element.GRASS,
    Element.GRASS,
    Element.GRASS,
    Element.GRASS,
    Element.GRASS,
    Element.GRASS,
    Element.EDGE_TOP_LEFT,
    Element.EDGE_TOP_CENTER,
    Element.EDGE_TOP_RIGHT,
    Element.EDGE_LEFT,
    Element.EDGE_RIGHT,
    Element.EDGE_BOTTOM_LEFT,
    Element.EDGE_BOTTOM_CENTER,
    Element.EDGE_BOTTOM_RIGHT,
    Element.EDGE_INNER_TOP_LEFT,
    Element.EDGE_INNER_TOP_RIGHT,
    Element.EDGE_INNER_BOTTOM_LEFT,
    Element.EDGE_INNER_BOTTOM_RIGHT,
]

type ElementList = { [key in Element]?: Tile };

export type Direction = "north" | "south" | "east" | "west";

type PossibleConnections = {
  north: Element[];
  south: Element[];
  east: Element[];
  west: Element[];
};

export type Tile = {
  element: (props: TileProps) => ReactNode;
  edgeDefinitions: {
    north: string;
    south: string;
    east: string;
    west: string;
  };
  possibleConnections: PossibleConnections;
};

const elements: ElementList = {
  [Element.NOTHING]: {
    element: Nothing,

    edgeDefinitions: {
      north: "0_0_0",
      south: "0_0_0",
      east: "0_0_0",
      west: "0_0_0",
    },

    possibleConnections: {
      north: [],
      south: [],
      east: [],
      west: [],
    },
  },
  [Element.GRASS]: {
    element: Grass,

    edgeDefinitions: {
      north: "g_g_g",
      south: "g_g_g",
      east: "g_g_g",
      west: "g_g_g",
    },

    possibleConnections: {
      north: [],
      south: [],
      east: [],
      west: [],
    },
  },
  [Element.EDGE_TOP_LEFT]: {
    element: EdgeTopLeft,
    edgeDefinitions: {
      north: "0_0_0",
      south: "0_e_g",
      east: "0_e_g",
      west: "0_0_0",
    },
    possibleConnections: {
      north: [],
      south: [],
      east: [],
      west: [],
    },
  },
  [Element.EDGE_TOP_CENTER]: {
    element: EdgeTop,
    edgeDefinitions: {
      north: "0_0_0",
      south: "g_g_g",
      east: "0_e_g",
      west: "0_e_g",
    },
    possibleConnections: {
      north: [],
      south: [],
      east: [],
      west: [],
    },
  },
  [Element.EDGE_TOP_RIGHT]: {
    element: EdgeTopRight,
    edgeDefinitions: {
      north: "0_0_0",
      south: "g_e_0",
      east: "0_0_0",
      west: "0_e_g",
    },
    possibleConnections: {
      north: [],
      south: [],
      east: [],
      west: [],
    },
  },
  [Element.EDGE_LEFT]: {
    element: EdgeLeft,
    edgeDefinitions: {
      north: "0_e_g",
      south: "0_e_g",
      east: "g_g_g",
      west: "0_0_0",
    },
    possibleConnections: {
      north: [],
      south: [],
      east: [],
      west: [],
    },
  },
  [Element.EDGE_RIGHT]: {
    element: EdgeRight,
    edgeDefinitions: {
      north: "g_e_0",
      south: "g_e_0",
      east: "0_0_0",
      west: "g_g_g",
    },
    possibleConnections: {
      north: [],
      south: [],
      east: [],
      west: [],
    },
  },
  [Element.EDGE_BOTTOM_LEFT]: {
    element: EdgeBottomLeft,
    edgeDefinitions: {
      north: "0_e_g",
      south: "0_0_0",
      east: "g_e_0",
      west: "0_0_0",
    },
    possibleConnections: {
      north: [],
      south: [],
      east: [],
      west: [],
    },
  },
  [Element.EDGE_BOTTOM_CENTER]: {
    element: EdgeBottom,
    edgeDefinitions: {
      north: "g_g_g",
      south: "0_0_0",
      east: "g_e_0",
      west: "g_e_0",
    },
    possibleConnections: {
      north: [],
      south: [],
      east: [],
      west: [],
    },
  },
  [Element.EDGE_BOTTOM_RIGHT]: {
    element: EdgeBottomRight,
    edgeDefinitions: {
      north: "g_e_0",
      south: "0_0_0",
      east: "0_0_0",
      west: "g_e_0",
    },
    possibleConnections: {
      north: [],
      south: [],
      east: [],
      west: [],
    },
  },
  [Element.EDGE_INNER_TOP_LEFT]: {
    element: EdgeInnerTopLeft,
    edgeDefinitions: {
      north: '0_e_g',
      east: 'g_g_g',
      south: 'g_g_g',
      west: '0_e_g',
    },
    possibleConnections: {
      north: [],
      south: [],
      east: [],
      west: [],
    }
  },
  [Element.EDGE_INNER_TOP_RIGHT]: {
    element: EdgeInnerTopRight,
    edgeDefinitions: {
      north: 'g_e_0',
      east: '0_e_g',
      south: 'g_g_g',
      west: 'g_g_g',
    },
    possibleConnections: {
      north: [],
      south: [],
      east: [],
      west: [],
    }
  },
  [Element.EDGE_INNER_BOTTOM_LEFT]: {
    element: EdgeInnerBottomLeft,
    edgeDefinitions: {
      north: 'g_g_g',
      east: 'g_g_g',
      south: '0_e_g',
      west: 'g_e_0',
    },
    possibleConnections: {
      north: [],
      south: [],
      east: [],
      west: [],
    }
  },
  [Element.EDGE_INNER_BOTTOM_RIGHT]: {
    element: EdgeInnerBottomRight,
    edgeDefinitions: {
      north: 'g_g_g',
      east: 'g_e_0',
      south: 'g_e_0',
      west: 'g_g_g',
    },
    possibleConnections: {
      north: [],
      south: [],
      east: [],
      west: [],
    }
  },
};

function calculateConnections(elements: ElementList) {
  let newElements: ElementList = {};

  let keys = Object.values(Element).filter(
    (v): v is Element => !isNaN(Number(v))
  );

  keys.forEach((key) => {
    const element = elements[key];

    if (!element) {
      return;
    }

    const newElement = Object.assign({}, element)

    newElement.possibleConnections.north = getMatchingEdgeDefinitions(
      elements,
      "north",
      element.edgeDefinitions.north
    );
    newElement.possibleConnections.east = getMatchingEdgeDefinitions(
      elements,
      "east",
      element.edgeDefinitions.east
    );

    newElement.possibleConnections.south = getMatchingEdgeDefinitions(
      elements,
      "south",
      element.edgeDefinitions.south
    );

    newElement.possibleConnections.west = getMatchingEdgeDefinitions(
      elements,
      "west",
      element.edgeDefinitions.west
    );

    newElements[key] = newElement
  });

  return newElements;
}

function getMatchingEdgeDefinitions(
  elements: ElementList,
  direction: Direction,
  definition: string
): Element[] {

  const checkDirection = getOppositeDirection(direction);

  const possibleConnections: Element[] = []

  let keys = Object.values(Element).filter(
    (v): v is Element => !isNaN(Number(v))
  );

  keys.forEach((key) => {
    const element = elements[key];

    if (!element) {
      return;
    }

    if (element.edgeDefinitions[checkDirection] === definition) {
      possibleConnections.push(key)
    }
  });

  return possibleConnections;
}

export const resolvedElements = calculateConnections(elements)
