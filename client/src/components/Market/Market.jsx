import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import axios from "axios";
import { BASE_URL } from "../../config";

const Market = () => {
  const { backgroundColor, textColor } = useContext(ThemeContext);
  const [marketData, setMarketData] = useState({
    gold: "",
    silver: "",
    goldImg: "",
    silverImg: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/market`);
        setMarketData(response.data);
      } catch (error) {
        console.error("Error fetching market data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once when component mounts

  return (
    <div className="liverate-cover">
      <div className="liverate-title">
        <h4 style={{ color: backgroundColor }}>MARKET TRENDZ</h4>
      </div>
      <div className="container">
        <div className="chart">
          <div className="col-sm-12">
            <div className="gb-chartbx">
              <h2
                style={{ backgroundColor: backgroundColor, color: textColor }}
              >
                {/* GOLD (10 GM) */}
                {marketData[0].gold}
              </h2>
              <div className="pd10 text-center">
                <img
                  id="imgGoldChart"
                  src={marketData[0].goldImg} // Render gold data here
                  alt="Gold Chart"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="gb-chartbx">
              <h2
                style={{ backgroundColor: backgroundColor, color: textColor }}
              >
                {/* SILVER (1 KG) */}
                {marketData[0].silver}
              </h2>
              <div className="pd10 text-center">
                <img
                  id="imgsilverChart"
                  src={marketData[0].silverImg} // Render silver data here
                  alt="Silver Chart"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
