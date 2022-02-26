import React from "react";
import { hydrate, render } from "react-dom";

import "assets/styles/base.css";
import Home from "components/Home";

const App = () => <Home />;

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
