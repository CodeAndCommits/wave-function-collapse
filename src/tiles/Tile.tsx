import { createPortal } from "react-dom";
import { useBoolean } from "usehooks-ts";

export interface TileProps {
  x: number;
  y: number;
  scale?: number;
  width?: number;
  height?: number;
}

interface RootTileProps extends TileProps {
  scale: number;
  width: number;
  height: number;
  href: string;
  type: string;
}

export function Tile({
  x,
  y,
  scale,
  href,
  width,
  height,
  type,
}: RootTileProps) {
  const hovering = useBoolean(false);

  const onHover = () => {
    hovering.setTrue();
  };

  const onLeave = () => {
    hovering.setFalse();
  };

  const actualX = x * width * scale;
  const actualY = y * width * scale;

  const actualWidth = width * scale;
  const actualHeight = height * scale;

  return (
    <g onMouseEnter={onHover} onMouseLeave={onLeave}>
      <image
        x={actualX}
        y={actualY}
        href={href}
        width={actualWidth}
        height={actualHeight}
        style={{ imageRendering: "pixelated" }}
      />
      {hovering.value && (
        <rect
          x={actualX + 1}
          y={actualY + 1}
          width={actualWidth - 2}
          height={actualHeight - 2}
          fill="none"
          stroke="white"
        />
      )}

      {hovering.value &&
        createPortal(
          <>
            <text x={10} y={20}>
              x: {x} y: {y} tile: {type}
            </text>
          </>,
          document.getElementById("svg-portal") as Element
        )}
    </g>
  );
}
