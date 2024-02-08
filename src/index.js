import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import { ThemeProvider } from "./context/theme";

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
