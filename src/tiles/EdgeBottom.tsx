import { SimpleTile } from "./SimpleTile";
import { TileProps } from "./Tile";

import tile from '../assets/tilesets/grass_tiles_23.png'

export function EdgeBottom(props: TileProps) {
    return <SimpleTile {...props} type="Edge - Bottom" href={tile} />
}
