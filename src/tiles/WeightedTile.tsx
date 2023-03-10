import { useState } from "react";
import { SimpleTile } from "./SimpleTile";
import { TileProps } from "./Tile";

export type WeightedTiles = {
    tile: string, weight: number
}[]

export function WeightedTile({tiles, ...props}: TileProps & {type: string, tiles: WeightedTiles}) {
    const [tile] = useState((): string => {
        const value = Math.random();
        for (let tile of tiles) {
          if (value <= tile.weight) {
            return tile.tile;
          }
        }
        return tiles[0].tile;
      });

      return <SimpleTile {...props} href={tile} />
}
