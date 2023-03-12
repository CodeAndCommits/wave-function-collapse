import { SimpleTile } from "./SimpleTile";
import { TileProps } from "./Tile";

import tile from '../assets/tilesets/grass_tiles_27.png'

export function EdgeInnerTopRight(props: TileProps) {
    return <SimpleTile {...props} type="Edge - Inner Top Right" href={tile} />
}
