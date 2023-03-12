import { ReactNode, useMemo, useState } from "react";
import { useInterval } from "usehooks-ts";
import { newGrid, solve } from "./lib/grid";
import { Element, resolvedElements, Tile } from "./lib/tiles";
import { Svg } from "./Svg";
import { Water } from "./tiles/Water";

export function Map() {
  const waterTiles: ReactNode[] = [];

  const width = 48;
  const height = 32;

  const [possibleTiles, setPossibleTiles] = useState(newGrid(width, height));
  const [solving, setSolving] = useState<number | null>(100)

  const [scale, setScale] = useState(1.5);


  [...Array(height).keys()].map((y) =>
    [...Array(width).keys()].map((x) =>
      waterTiles.push(<Water key={`${x}-${y}`} x={x} y={y} scale={scale} />)
    )
  );

  useInterval(() => {
    const newPossibleTiles = solve(possibleTiles)

    if (newPossibleTiles === false) {
      setSolving(null);
      return
    }

    setPossibleTiles([...newPossibleTiles])
  }, solving)

  const grid = useMemo(() => {
    const grid: ReactNode[] = [];

    possibleTiles.forEach((row, y) => {
      row.forEach((possibleElements, x) => {
        if (new Set(possibleElements).size !== 1) {
          grid.push(
            <g key={`${x},${y}`}>
              {(resolvedElements[Element.NOTHING] as Tile).element({
                x,
                y,
                scale,
              })}
            </g>
          );
          return;
        }

        grid.push(
          <g key={`${x},${y}`}>
            {(resolvedElements[possibleElements[0]] as Tile).element({
              x,
              y,
              scale,
            })}
          </g>
        );
      });
    });

    return grid;
  }, [possibleTiles]);

  return (
    <div>
      <div style={{ margin: "0 auto" }}>
        <Svg width={width * 16 * scale} height={height * 16 * scale}>
          {waterTiles}
          {grid}
        </Svg>
      </div>
    </div>
  );
}
