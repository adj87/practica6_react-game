import React from "react";
import { render } from "react-dom";
import Tablero from "./components/Tablero";

const App = () => (
  <div>
    <Tablero />
  </div>
);

render(<App />, document.getElementById("root"));
