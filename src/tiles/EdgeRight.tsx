import { SimpleTile } from "./SimpleTile";
import { TileProps } from "./Tile";

import tile from '../assets/tilesets/grass_tiles_13.png'

export function EdgeRight(props: TileProps) {
    return <SimpleTile {...props} type="Edge - Right" href={tile} />
}
