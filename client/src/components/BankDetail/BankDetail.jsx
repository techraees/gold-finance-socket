import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { BASE_URL } from "./../../config.js";
import { ThemeContext } from "../../context/ThemeContext.jsx";

const BankDetail = () => {
  const { backgroundColor, textColor } = useContext(ThemeContext);
  const [bankData, setBankData] = useState(null);

  useEffect(() => {
    // Fetch bank details from the backend API
    axios
      .get(`${BASE_URL}/api/bank-details`)
      .then((response) => {
        setBankData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching bank details:", error);
      });
  }, []);

  return (
    <div className="liverate-cover">
      <div className="liverate-title">
        <h4 style={{ color: backgroundColor }}>BANK DETAILS</h4>
      </div>
      <div className="bank-cover">
        <div className="container a1">
          <div className="col-md-12 a1">
            <div id="DivBankRecord">
              <div className="col-md-6 col-sm-6 col-xs-12 offset-md-3 offset-md-3 mar-btm">
                <div className="bank-img">
                  <img src="/yes.jpg" alt="..." className="img-thumbnail" />
                </div>
                <div className="tg-contentbox">
                  {bankData && (
                    <table
                      width="100%"
                      border="0"
                      cellspacing="0"
                      cellpadding="0"
                      className="bankd"
                    >
                      <tbody>
                        <tr>
                          <td
                            className="ban1"
                            style={{ color: backgroundColor }}
                          >
                            BANK NAME <span className="b_bott">::</span>
                          </td>
                          <td
                            className="ban3"
                            style={{ color: backgroundColor }}
                          >
                            {bankData.bankName}
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="ban1"
                            style={{ color: backgroundColor }}
                          >
                            ACCOUNT NAME <span className="b_bott">::</span>
                          </td>
                          <td
                            className="ban3"
                            style={{ color: backgroundColor }}
                          >
                            {bankData.accountName}
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="ban1"
                            style={{ color: backgroundColor }}
                          >
                            ACCOUNT NUMBER<span className="b_bott">::</span>
                          </td>
                          <td
                            className="ban3"
                            style={{ color: backgroundColor }}
                          >
                            {bankData.accountNumber}
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="ban1"
                            style={{ color: backgroundColor }}
                          >
                            IFSC CODE <span className="b_bott">::</span>
                          </td>
                          <td
                            className="ban3"
                            style={{ color: backgroundColor }}
                          >
                            {bankData.ifscCode}
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="ban1"
                            style={{ color: backgroundColor }}
                          >
                            BRANCH NAME <span className="b_bott">::</span>
                          </td>
                          <td
                            className="ban3"
                            style={{ color: backgroundColor }}
                          >
                            {bankData.branchName}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankDetail;
