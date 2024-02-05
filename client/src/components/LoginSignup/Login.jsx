import React, { useState } from "react";

const Login = () => {
  const [registerVisible, setRegisterVisible] = useState(false);

  const handleRegisterToggle = () => {
    setRegisterVisible(!registerVisible);
  };

  return (
    <div className="login-cover">
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <img src="/logo.svg" id="icon" alt="User Icon" />
          </div>
          <form>
            <input
              type="text"
              id="txtLogin"
              className="fadeIn second"
              name="login"
              placeholder="login"
            />
            <input
              type="password"
              id="txtpass"
              className="fadeIn third"
              name="login"
              placeholder="password"
            />
            <input
              type="button"
              className="fourth"
              value="Log In"
              id="btnChecklogin"
            />
          </form>
          <div id="formFooter">
            <span style={{ color: "#fff", fontSize: "14px" }}>
              Don't have an account?{" "}
              <a
                className="underlineHover"
                href="https://bullion.safegold.in/Terminal/Login.html#"
                onClick={handleRegisterToggle}
                style={{ fontSize: "14px" }}
              >
                Register Here
              </a>
            </span>
          </div>
        </div>
      </div>
      {registerVisible && (
        <div
          className="modal fade registered"
          id="myModal1"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          style={{ display: "block" }}
        >
          {/* Modal Content */}
        </div>
      )}
    </div>
  );
};

export default Login;
