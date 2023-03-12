import { SimpleTile } from "./SimpleTile";
import { TileProps } from "./Tile";

import tile from '../assets/tilesets/grass_tiles_28.png'

export function EdgeInnerTopLeft(props: TileProps) {
    return <SimpleTile {...props} type="Edge - Inner Top Left" href={tile} />
}
