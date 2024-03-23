import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./AppRoot";

// Creating instance of root element in the virtual or react dom
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the app component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
