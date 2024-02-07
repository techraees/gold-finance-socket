import React, { useState, useContext } from "react";
import "./../../../public/css/login/color.css";
import "./../../../public/css/login/style.css";
import "./../../../public/css/login/color-picker.css";
import Signup from "./Signup";
import { ThemeContext } from "../../context/ThemeContext";

const Login = () => {
  const { backgroundColor, textColor } = useContext(ThemeContext);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Handle login logic here
    console.log("Login: ", login);
    console.log("Password: ", password);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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
              className="fadeIn second"
              name="login"
              placeholder="login"
              value={login}
              onChange={handleLoginChange}
            />
            <input
              type="password"
              className="fadeIn third"
              name="password"
              placeholder="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <input
              type="button"
              className="fourth"
              value="Log In"
              onClick={handleLogin}
              style={{ backgroundColor: backgroundColor }}
            />
          </form>
          <div id="formFooter" style={{ backgroundColor: backgroundColor }}>
            <span style={{ color: "#fff", fontSize: "14px" }}>
              Don't have an account?{" "}
              <a
                className="underlineHover"
                href="#"
                onClick={openModal}
                style={{ fontSize: "14px" }}
              >
                Register Here
              </a>
            </span>
          </div>
          {showModal && <Signup closeModal={closeModal} />}
        </div>
      </div>
    </div>
  );
};

export default Login;
