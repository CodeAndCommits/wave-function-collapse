import { SimpleTile } from "./SimpleTile";
import { TileProps } from "./Tile";

import tile from '../assets/tilesets/grass_tiles_22.png'

export function EdgeBottomLeft(props: TileProps) {
    return <SimpleTile {...props} type="Edge - Bottom Left" href={tile} />
}
