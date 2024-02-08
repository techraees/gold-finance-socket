import React, { useState, useEffect } from "react";
import axios from "axios";

import { BASE_URL } from "../../../../../config";

const ColorDashboard = ({ onUpdateColors }) => {
  const [bgColor, setBgColor] = useState(""); // Initial background color
  const [textColor, setTextColor] = useState(""); // Initial text color

  // Function to fetch colors from the backend when the component mounts
  useEffect(() => {
    fetchColors();
  }, []);

  const fetchColors = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/color`);
      const { bgColor, textColor } = response.data;
      setBgColor(bgColor);
      setTextColor(textColor);
    } catch (error) {
      console.error("Error fetching theme colors:", error);
    }
  };
  const handleUpdateColors = async () => {
    try {
      // Send PUT request to update colors
      const response = await axios.put(`${BASE_URL}/api/color`, {
        bgColor,
        textColor,
      });

      // Check if the response is successful
      if (response.status === 200) {
        console.log("Theme colors updated successfully");

        // Update parent component with the new colors if onUpdateColors is a function
        if (typeof onUpdateColors === "function") {
          onUpdateColors(bgColor, textColor);
        } else {
          console.error("onUpdateColors is not a function");
        }
      } else {
        console.error("Failed to update theme colors");
      }
    } catch (error) {
      console.error("Error updating theme colors:", error);
    }
  };

  console.log("onUpdateColors:", onUpdateColors);

  return (
    <div className="container mt-5">
      <h2 style={{ fontSize: "30px" }}>COLOR CHANGE WEBSITE EDIT</h2>
      <div className="col">
        <div className="row col-md-5 mt-3">
          <div className="form-group">
            <label style={{ fontSize: "20px" }}>Background Color:</label>
            <input
              type="color"
              className="form-control mt-2"
              style={{ height: "40px" }}
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
            />
          </div>
        </div>
        <div className="row col-md-5 mt-3">
          <div className="form-group">
            <label style={{ fontSize: "20px" }}>Text Color:</label>
            <input
              type="color"
              className="form-control mt-2"
              style={{ height: "40px" }}
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <button
            className="btn btn-primary"
            onClick={handleUpdateColors}
            style={{ fontSize: "20px" }}
          >
            Update Colors
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorDashboard;
