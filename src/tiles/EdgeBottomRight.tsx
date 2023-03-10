import { SimpleTile } from "./SimpleTile";
import { TileProps } from "./Tile";

import tile from '../assets/tilesets/grass_tiles_24.png'

export function EdgeBottomRight(props: TileProps) {
    return <SimpleTile {...props} type="Edge - Bottom Right" href={tile} />
}
