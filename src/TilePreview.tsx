import { resolvedElements, Tile } from "./lib/tiles";
import { Svg } from "./Svg";
import "./TilePreview.css";

export function TilePreview({ element }: { element: Tile }) {
  return (
    <div className="TilePreview">
      <div
        style={{
          gridArea: "north",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {element.possibleConnections.north.map((element, i) => (
          <div key={i} style={{ border: "1px solid white" }}>
            <Svg width={32} height={32}>
              {resolvedElements[element]?.element({ x: 0, y: 0 })}
            </Svg>
          </div>
        ))}
      </div>

      <div
        style={{
          gridArea: "west",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          flexDirection: "column",
        }}
      >
        {element.possibleConnections.west.map((element, i) => (
          <div key={i} style={{ border: "1px solid white" }}>
            <Svg width={32} height={32}>
              {resolvedElements[element]?.element({ x: 0, y: 0 })}
            </Svg>
          </div>
        ))}
      </div>
      <div
        style={{
          gridArea: "tile",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ border: "1px solid white" }}>
          <Svg width={64} height={64}>
            {element.element({ x: 0, y: 0, scale: 4 })}
          </Svg>
        </div>
      </div>
      <div
        style={{
          gridArea: "east",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          flexDirection: "column",
        }}
      >
        {element.possibleConnections.east.map((element, i) => (
          <div key={i} style={{ border: "1px solid white" }}>
            <Svg width={32} height={32}>
              {resolvedElements[element]?.element({ x: 0, y: 0 })}
            </Svg>
          </div>
        ))}
      </div>

      <div
        style={{
          gridArea: "south",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {element.possibleConnections.south.map((element, i) => (
          <div key={i} style={{ border: "1px solid white" }}>
            <Svg width={32} height={32}>
              {resolvedElements[element]?.element({ x: 0, y: 0 })}
            </Svg>
          </div>
        ))}
      </div>
    </div>
  );
}
