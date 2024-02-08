import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

const Home = () => {
  const { backgroundColor, textColor } = useContext(ThemeContext);

  const [socketData, setSocketData] = useState({ bid: null });
  const [isBidIncreased, setIsBidIncreased] = useState(false);
  useEffect(() => {
    const ws = new WebSocket("wss://marketdata.tradermade.com/feedadv");
    ws.onopen = () => {
      console.log("WebSocket connection established.");
      ws.send(
        JSON.stringify({
          userKey: "sioe_tRybWOO9pysqiUHw",
          symbol: "XAUUSD",
        })
      );
    };

    ws.onmessage = (event) => {
      if (event.data === "Connected") {
        console.log("WebSocket connected successfully.");
        return;
      }

      const newData = JSON.parse(event.data);
      setIsBidIncreased(newData.bid > socketData.bid);
      setSocketData(newData);
    };
    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed.");
    };
    return () => {
      ws.close();
    };
  }, [socketData.bid]);

  console.log(isBidIncreased);

  return (
    <div>
      {/* Your JSX code */}
      <div className="liverate-cover">
        <div className="liverate-title">
          <h4 style={{ color: backgroundColor }}>LIVE RATE</h4>
        </div>
        <div className="spot-cover">
          <div className="container">
            <div className="spot-content-cover" id="divSpot">
              <div className="col-sm-4 col-md-4  px-3">
                <div className="spt-cover">
                  <div
                    className="content-title"
                    style={{
                      backgroundColor: backgroundColor,
                    }}
                  >
                    <h5 style={{ color: textColor }}>GOLD (USD/OZ)</h5>
                  </div>
                  <div className="spot-rate-cover">
                    <div
                      className="right-cover"
                      style={{
                        display: "inline-block",
                        textAlign: "right",
                        width: "100%",
                      }}
                    >
                      <div className="rate">
                        <div className="mainr" style={{ textAlign: "center" }}>
                          <p
                            className="bigfont e"
                            style={{
                              background: `${isBidIncreased ? "green" : "red"}`,
                              color: "white",
                            }}
                          >
                            {" "}
                            {socketData.bid &&
                              parseFloat(socketData.bid.toFixed(2))}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="hl-cover">
                      <div className="left-cover">
                        <div className="rate">
                          <div className="mainr">
                            <p className="smallfont">L - 2039.43</p>
                          </div>
                        </div>
                      </div>
                      <div className="right-cover">
                        <div className="rate">
                          <div className="mainr">
                            <p className="smallfont">H - 2039.58</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-4  px-3">
                <div className="spt-cover ">
                  <div
                    className="content-title"
                    style={{
                      backgroundColor: backgroundColor,
                    }}
                  >
                    <h5 style={{ color: textColor }}>SILVER (USD/OZ)</h5>
                  </div>
                  <div className="spot-rate-cover">
                    <div
                      className="right-cover"
                      style={{
                        display: "inline-block",
                        textAlign: "right",
                        width: "100%",
                      }}
                    >
                      <div className="rate">
                        <div className="mainr" style={{ textAlign: "center" }}>
                          <p className="bigfont e">{socketData.ask}</p>
                        </div>
                      </div>
                    </div>
                    <div className="hl-cover">
                      <div className="left-cover">
                        <div className="rate">
                          <div className="mainr">
                            <p className="smallfont">L - 22.68</p>
                          </div>
                        </div>
                      </div>
                      <div className="right-cover">
                        <div className="rate">
                          <div className="mainr">
                            <p className="smallfont">H - 22.68</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-4  px-3">
                <div className="spt-cover">
                  <div
                    className="content-title"
                    style={{
                      backgroundColor: backgroundColor,
                    }}
                  >
                    <h5 style={{ color: textColor }}>INR (USD/INR)</h5>
                  </div>
                  <div className="spot-rate-cover">
                    <div
                      className="right-cover"
                      style={{
                        display: "inline-block",
                        textAlign: "right",
                        width: "100%",
                      }}
                    >
                      <div className="rate">
                        <div className="mainr" style={{ textAlign: "center" }}>
                          <p className="bigfont e">{socketData.mid}</p>
                        </div>
                      </div>
                    </div>
                    <div className="hl-cover">
                      <div className="left-cover">
                        <div className="rate">
                          <div className="mainr">
                            <p className="smallfont">L - 82.8300</p>
                          </div>
                        </div>
                      </div>
                      <div className="right-cover">
                        <div className="rate">
                          <div className="mainr">
                            <p className="smallfont">H - 83.0000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-product-cover">
              <div
                className="product-title header tablePriceBuySell"
                id="divHeader"
              >
                <table className="table">
                  <tbody className="table_tbody_data">
                    <tr
                      className=""
                      style={{
                        backgroundColor: backgroundColor,
                      }}
                    >
                      <th
                        className="text-left w-p"
                        style={{
                          color: textColor,
                          backgroundColor: backgroundColor,
                        }}
                      >
                        Product
                      </th>
                      <th
                        className="text-center mnp-big w-b"
                        style={{
                          color: textColor,
                          backgroundColor: backgroundColor,
                        }}
                      >
                        BUY
                      </th>
                      <th
                        className="text-center mnp-big w-b"
                        style={{
                          color: textColor,
                          backgroundColor: backgroundColor,
                        }}
                      >
                        SELL
                      </th>
                      <th
                        className="text-center mnp-sm w-s"
                        style={{
                          display: "none",
                          color: textColor,
                          backgroundColor: backgroundColor,
                        }}
                      >
                        HIGH
                      </th>
                      <th
                        className="text-center mnp-sm w-s"
                        style={{
                          display: "none",
                          color: textColor,
                          backgroundColor: backgroundColor,
                        }}
                      >
                        LOW
                      </th>
                      <th
                        className="text-center mnp-sm buyb"
                        style={{
                          color: textColor,
                          backgroundColor: backgroundColor,
                        }}
                      ></th>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="product-title prate" id="divProduct">
                <div className="product-title prate pirate-padding_setting">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td className="text-left p-left w-p">
                          Gold 995 500 gm 6th Feb Without GST
                        </td>
                        <td className="text-center mnp-big w-b">
                          <span className="e">--</span>
                        </td>
                        <td className="text-center mnp-big w-b">
                          <span className="e">62618</span>
                        </td>
                        <td
                          className="text-center mnp-sm w-s"
                          style={{ display: "none" }}
                        >
                          <span>62618</span>
                        </td>
                        <td
                          className="text-center mnp-sm w-s"
                          style={{ display: "none" }}
                        >
                          <span>62618</span>
                        </td>
                        <td className="text-center mnp-sm buyb">
                          <div className="buybutton">
                            <Link to="/login">
                              <input
                                type="button"
                                value="BUY"
                                style={{
                                  color: textColor,
                                  backgroundColor: backgroundColor,
                                }}
                              />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="product-title prate pirate-padding_setting">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td className="text-left p-left w-p">
                          Gold 999 100 gm 6th Feb without GST)Mumbai
                        </td>
                        <td className="text-center mnp-big w-b">
                          <span className="e">--</span>
                        </td>
                        <td className="text-center mnp-big w-b">
                          <span className="e">62868</span>
                        </td>
                        <td
                          className="text-center mnp-sm w-s"
                          style={{ display: "none" }}
                        >
                          <span>62868</span>
                        </td>
                        <td
                          className="text-center mnp-sm w-s"
                          style={{ display: "none" }}
                        >
                          <span>62868</span>
                        </td>
                        <td className="text-center mnp-sm buyb">
                          <div className="buybutton">
                            <Link to="/login">
                              <input
                                type="button"
                                value="BUY"
                                style={{
                                  color: textColor,
                                  backgroundColor: backgroundColor,
                                }}
                              />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <span className="spot-content-cover future">
              <div
                id="divFuture"
                className=" d-flex justify-content-center align-items-center gap-4"
              >
                <div className="col-sm-6 col-md-6 divFutureWidthSetting">
                  <div className="spt-cover">
                    <div
                      className="content-title"
                      style={{
                        backgroundColor: backgroundColor,
                      }}
                    >
                      <h5 style={{ color: textColor }}>GOLD FUTURE</h5>
                    </div>
                    <div className="spot-rate-cover">
                      <div className="left-cover">
                        <div className="rate">
                          <div className="mainr">
                            <span className="rate-ttl">BID</span>
                            <p className="bigfont e">62589</p>
                          </div>
                        </div>
                      </div>
                      <div className="right-cover">
                        <div className="rate">
                          <div className="mainr">
                            <span className="rate-ttl">ASK</span>
                            <p className="bigfont e">62598</p>
                          </div>
                        </div>
                      </div>
                      <div className="hl-cover">
                        <div className="left-cover">
                          <div className="rate">
                            <div className="mainr">
                              <p className="smallfont">L - 62382</p>
                            </div>
                          </div>
                        </div>
                        <div className="right-cover">
                          <div className="rate">
                            <div className="mainr">
                              <p className="smallfont">H - 62998</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 divFutureWidthSetting">
                  <div className="spt-cover">
                    <div
                      className="content-title"
                      style={{
                        backgroundColor: backgroundColor,
                      }}
                    >
                      <h5 style={{ color: textColor }}>SILVER FUTURE</h5>
                    </div>
                    <div className="spot-rate-cover">
                      <div className="left-cover">
                        <div className="rate">
                          <div className="mainr">
                            <span className="rate-ttl">BID</span>
                            <p className="bigfont e">71287</p>
                          </div>
                        </div>
                      </div>
                      <div className="right-cover">
                        <div className="rate">
                          <div className="mainr">
                            <span className="rate-ttl">ASK</span>
                            <p className="bigfont e">71290</p>
                          </div>
                        </div>
                      </div>
                      <div className="hl-cover">
                        <div className="left-cover">
                          <div className="rate">
                            <div className="mainr">
                              <p className="smallfont">L - 70755</p>
                            </div>
                          </div>
                        </div>
                        <div className="right-cover">
                          <div className="rate">
                            <div className="mainr">
                              <p className="smallfont">H - 72414</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span id="divNext"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
