import { SimpleTile } from "./SimpleTile";
import { TileProps } from "./Tile";

import tile from '../assets/tilesets/grass_tiles_11.png'

export function EdgeLeft(props: TileProps) {
    return <SimpleTile {...props} type="Edge - Left" href={tile} />
}
