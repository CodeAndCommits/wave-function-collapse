import { ReactNode, useMemo, useState } from "react";
import "./App.css";
import { Svg } from "./Svg";
import { Water } from "./tiles/Water";
import { TileDictionary } from "./TileDictionary";
import { newGrid, solve } from "./lib/grid";
import { Element, Tile, resolvedElements } from "./lib/tiles";

function App() {
  const waterTiles: ReactNode[] = [];

  const [possibleTiles, setPossibleTiles] = useState(solve(newGrid(16, 16)));

  const [scale, setScale] = useState(3);

  [...Array(16).keys()].map((y) =>
    [...Array(16).keys()].map((x) =>
      waterTiles.push(<Water key={`${x}-${y}`} x={x} y={y} scale={scale} />)
    )
  );

  const grid = useMemo(() => {
    const grid: ReactNode[] = [];

    possibleTiles.forEach((row, y) => {
      row.forEach((possibleElements, x) => {
        if (possibleElements.length !== 1) {
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
    <div className="App">
      <div style={{ margin: "0 auto" }}>
        <Svg width={16 * 16 * scale} height={16 * 16 * scale}>
          {waterTiles}
          {grid}
        </Svg>
      </div>

      <button onClick={() => {
        setPossibleTiles([...solve(possibleTiles)])
      }}>Next Step</button>

      <TileDictionary />
    </div>
  );
}

export default App;
