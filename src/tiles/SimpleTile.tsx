import { Tile, TileProps } from "./Tile";

export function SimpleTile({ type, href, x, y, width = 16, height = 16, scale = 2 }: TileProps & {type: string, href: string}) {
    return <Tile type={type} href={href} x={x} y={y} width={width} height={height} scale={scale} />
}
