import React from "react";

const Market = () => {
  return (
    <div className="liverate-cover">
      <div className="liverate-title">
        <h4>MARKET TRENDZ</h4>
      </div>
      <div className="container">
        <div className="chart">
          <div className="col-sm-12">
            <div className="gb-chartbx">
              <h2>GOLD (10 GM)</h2>
              <div className="pd10 text-center">
                <img
                  id="imgGoldChart"
                  src="https://bullion.safegold.in/market-trendz.html"
                  alt="Gold Chart"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="gb-chartbx">
              <h2>SILVER (1 KG)</h2>
              <div className="pd10 text-center">
                <img
                  id="imgsilverChart"
                  src="https://bullion.safegold.in/market-trendz.html"
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
