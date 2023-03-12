import { SimpleTile } from "./SimpleTile";
import { TileProps } from "./Tile";

import tile from '../assets/tilesets/grass_tiles_17.png'

export function EdgeInnerBottomLeft(props: TileProps) {
    return <SimpleTile {...props} type="Edge - Inner Bottom Left" href={tile} />
}
