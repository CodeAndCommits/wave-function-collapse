import { SimpleTile } from "./SimpleTile";
import { TileProps } from "./Tile";

import tile from '../assets/tilesets/grass_tiles_02.png'

export function EdgeTopRight(props: TileProps) {
    return <SimpleTile {...props} type="Edge - Top Right" href={tile} />
}
