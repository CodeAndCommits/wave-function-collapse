import { SimpleTile } from "./SimpleTile";
import { TileProps } from "./Tile";

import tile from '../assets/tilesets/grass_tiles_01.png'

export function EdgeTop(props: TileProps) {
    return <SimpleTile {...props} type="Edge - Top" href={tile} />
}
