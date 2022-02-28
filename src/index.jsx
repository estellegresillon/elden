import React from "react";
import { hydrate, render } from "react-dom";

import "assets/styles/base.css";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { KeyFrames } from "assets/styles/KeyFrames";
import Home from "components/Home";

const App = () => (
  <>
    <GlobalStyle />
    <KeyFrames />
    <Home />
  </>
);

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
