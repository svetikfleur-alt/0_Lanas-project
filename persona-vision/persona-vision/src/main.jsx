import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Import global styles.  In a full project this would pull in
// Tailwind directives; here we leave the file minimal to avoid
// missing dependency issues.
import "./index.css";

// Mount the root React application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);