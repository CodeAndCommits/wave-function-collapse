import { useState } from "react";
import { Tile, TileProps } from "./Tile";

import grassTile0 from "../assets/tilesets/grass_tiles_12.png";
import grassTile1 from "../assets/tilesets/grass_tiles_55.png";
import grassTile2 from "../assets/tilesets/grass_tiles_56.png";
import grassTile3 from "../assets/tilesets/grass_tiles_57.png";
import grassTile4 from "../assets/tilesets/grass_tiles_58.png";
import grassTile5 from "../assets/tilesets/grass_tiles_59.png";
import grassTile6 from "../assets/tilesets/grass_tiles_60.png";
import grassTile7 from "../assets/tilesets/grass_tiles_66.png";
import grassTile8 from "../assets/tilesets/grass_tiles_67.png";
import grassTile9 from "../assets/tilesets/grass_tiles_68.png";
import grassTile10 from "../assets/tilesets/grass_tiles_69.png";
import grassTile11 from "../assets/tilesets/grass_tiles_70.png";
import grassTile12 from "../assets/tilesets/grass_tiles_71.png";
import { WeightedTile } from "./WeightedTile";

export function Grass(props: TileProps) {
  const tiles = [
    { tile: grassTile0, weight: 0.76 },
    { tile: grassTile1, weight: 0.78 },
    { tile: grassTile2, weight: 0.80 },
    { tile: grassTile3, weight: 0.82 },
    { tile: grassTile4, weight: 0.84 },
    { tile: grassTile5, weight: 0.86 },
    { tile: grassTile6, weight: 0.88 },
    { tile: grassTile7, weight: 0.90 },
    { tile: grassTile8, weight: 0.92 },
    { tile: grassTile9, weight: 0.94 },
    { tile: grassTile10, weight: 0.96 },
    { tile: grassTile11, weight: 0.98 },
    { tile: grassTile12, weight: 1 },
  ];

  return (
    <WeightedTile tiles={tiles} type="Grass" {...props} />
  );
}
