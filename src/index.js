import React from "react";
import ReactDOM from "react-dom";
import SimpleExample from "./geolocation";
import MapApp from "./MapApp";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <MapApp />
      <SimpleExample />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
