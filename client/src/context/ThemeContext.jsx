// ThemeContext.jsx

import React, { createContext, useState, useEffect } from "react";
import { BASE_URL } from "./../config.js";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");

  useEffect(() => {
    const fetchThemeSettings = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/color`);
        const data = await response.json();
        setBackgroundColor(data.bgColor);
        setTextColor(data.textColor);
      } catch (error) {
        console.error("Error fetching theme settings:", error);
      }
    };

    fetchThemeSettings();
  }, []);

  return (
    <ThemeContext.Provider value={{ backgroundColor, textColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
