import { useState } from "react";
import { useInterval } from "usehooks-ts";
import waterTile0 from "../assets/tilesets/water_tiles_0.png";
import waterTile1 from "../assets/tilesets/water_tiles_1.png";
import waterTile2 from "../assets/tilesets/water_tiles_1.png";
import waterTile3 from "../assets/tilesets/water_tiles_1.png";
import { SimpleTile } from "./SimpleTile";
import { Tile, TileProps } from "./Tile";

export function Water(props: TileProps) {
  const [tile, setTile] = useState(Math.floor(Math.random() * 4));
  const tiles = [waterTile0, waterTile1, waterTile2, waterTile3];

  const nextStep = () => {
    setTile((tile + 1) % 4);
  };

  useInterval(nextStep, Math.floor(Math.random() * 500) + 200);

  return <SimpleTile type={"Water"} href={tiles[tile]} {...props} />;
}
