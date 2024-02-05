import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="liverate-cover">
        <div className="liverate-title">
          <h4>LIVE RATE</h4>
        </div>
        <div className="spot-cover">
          <div className="container">
            <div className="spot-content-cover" id="divSpot">
              <div className="col-sm-4 col-md-4  px-3">
                <div className="spt-cover">
                  <div className="content-title">
                    <h5>GOLD (USD/OZ)</h5>
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
                          <p className="bigfont e">2040.00</p>
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
                  <div className="content-title">
                    <h5>SILVER (USD/OZ)</h5>
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
                          <p className="bigfont e">22.69</p>
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
                  <div className="content-title">
                    <h5>INR (USD/INR)</h5>
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
                          <p className="bigfont e">83.0290</p>
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
                    <tr className="">
                      <th className="text-left w-p">Product</th>
                      <th className="text-center mnp-big w-b">BUY</th>
                      <th className="text-center mnp-big w-b">SELL</th>
                      <th
                        className="text-center mnp-sm w-s"
                        style={{ display: "none" }}
                      >
                        HIGH
                      </th>
                      <th
                        className="text-center mnp-sm w-s"
                        style={{ display: "none" }}
                      >
                        LOW
                      </th>
                      <th className="text-center mnp-sm buyb"></th>
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
                              <input type="button" value="BUY" />
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
                              <input type="button" value="BUY" />
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
                    <div className="content-title">
                      <h5>GOLD FUTURE</h5>
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
                    <div className="content-title">
                      <h5>SILVER FUTURE</h5>
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
