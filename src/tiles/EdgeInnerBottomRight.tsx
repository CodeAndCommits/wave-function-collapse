import { SimpleTile } from "./SimpleTile";
import { TileProps } from "./Tile";

import tile from '../assets/tilesets/grass_tiles_16.png'

export function EdgeInnerBottomRight(props: TileProps) {
    return <SimpleTile {...props} type="Edge - Inner Bottom Right" href={tile} />
}
