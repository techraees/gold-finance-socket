import React from "react";

const BankDetail = () => {
  return (
    <div className="liverate-cover">
      <div className="liverate-title">
        <h4>BANK DETAILS</h4>
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
                  <table
                    width="100%"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    className="bankd"
                  >
                    <tbody>
                      <tr>
                        <td className="ban1">
                          BANK NAME <span className="b_bott">::</span>
                        </td>
                        <td className="ban3">Yes Bank</td>
                      </tr>
                      <tr>
                        <td className="ban1">
                          ACCOUNT NAME <span className="b_bott">::</span>
                        </td>
                        <td className="ban3">
                          Digital Gold India Private Limited
                        </td>
                      </tr>
                      <tr>
                        <td className="ban1">
                          ACCOUNT NUMBER<span className="b_bott">::</span>
                        </td>
                        <td className="ban3">041981300001696</td>
                      </tr>
                      <tr>
                        <td className="ban1">
                          IFSC CODE <span className="b_bott">::</span>
                        </td>
                        <td className="ban3">YESB0000419</td>
                      </tr>
                      <tr>
                        <td className="ban1">
                          BRANCH NAME <span className="b_bott">::</span>
                        </td>
                        <td className="ban3">Lower parel, Mumbai - 400013</td>
                      </tr>
                    </tbody>
                  </table>
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
