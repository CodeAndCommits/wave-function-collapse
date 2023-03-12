import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import { Map } from "./Map";
import { TileDictionary } from "./TileDictionary";

function App() {


  return (
    <div className="App">
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
