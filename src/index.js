import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ThemeProvider } from "./context/theme";
import "./index.css";

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
