import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { BASE_URL } from "../../config";
import { ThemeContext } from "../../context/ThemeContext";

const About = () => {
  const { backgroundColor, textColor } = useContext(ThemeContext);
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    // Fetch about data from the backend API
    axios
      .get(`${BASE_URL}/api/about`) // Replace "/api/about" with your actual backend API endpoint
      .then((response) => {
        setAboutData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching about data:", error);
        // Optionally, you can update state to indicate an error occurred
        // setError(true);
      });
  }, []);

  return (
    <div className="main-cover">
      <div className="container">
        <div className="bnk-cvr">
          <div className="bank-cover">
            <div className="container">
              <div className="liverate-cover">
                <div className="liverate-title">
                  <h4 style={{ color: backgroundColor }}>ABOUT US</h4>
                </div>
                <div className="about-cover align-items-center">
                  <div
                    className="col-md-6"
                    style={{
                      color: "black",
                      padding: "20px",
                      borderRadius: "10px",
                    }}
                  >
                    {aboutData ? (
                      <>
                        <p style={{ color: "black" }}>{aboutData.content}</p>
                        {aboutData.image && (
                          <img
                            src={aboutData.image}
                            alt="About Us"
                            className="img-fluid rounded"
                            style={{ maxHeight: "300px", objectFit: "cover" }}
                          />
                        )}
                      </>
                    ) : (
                      <p>Loading...</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
