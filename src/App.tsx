import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import { Map } from "./Map";
import { TileDictionary } from "./TileDictionary";

function App() {


  return (
    <div className="App">
      <h1>
        Wave Function Collapse
      </h1>
      <ErrorBoundary FallbackComponent={function ({error, resetErrorBoundary}) {
        return <div>{error.message}</div>
      }}>
        <Map />
      </ErrorBoundary>
      <TileDictionary />
    </div>
  );
}

export default App;
