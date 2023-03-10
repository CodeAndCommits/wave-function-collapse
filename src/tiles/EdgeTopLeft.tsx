import { SimpleTile } from "./SimpleTile";
import { TileProps } from "./Tile";

import tile from '../assets/tilesets/grass_tiles_00.png'

export function EdgeTopLeft(props: TileProps) {
    return <SimpleTile {...props} type="Edge - Top Left" href={tile} />
}
