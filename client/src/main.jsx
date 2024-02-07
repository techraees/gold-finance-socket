import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx"; // Import the ThemeProvider

try {
  ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider>
        {" "}
        {/* Wrap your App component with ThemeProvider */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
} catch (error) {
  console.error("Error rendering React application:", error);
}
