import { resolvedElements } from "./lib/tiles";
import { TilePreview } from "./TilePreview";

export function TileDictionary() {
    return (
        <div
        style={{
          marginTop: '5rem',
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "2rem",
        }}
      >
        <header style={{gridColumn: 'span 3'}}>
          <h2>Tile Dictionary</h2>
        </header>

        {Object.values(resolvedElements).map((el, i) => (
          <TilePreview key={i} element={el} />
        ))}
      </div>
    )
}
