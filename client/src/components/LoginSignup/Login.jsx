import React, { useState, useContext } from "react";
import "./../../../public/css/login/color.css";
import "./../../../public/css/login/style.css";
import "./../../../public/css/login/color-picker.css";
import Signup from "./Signup";
import { ThemeContext } from "../../context/ThemeContext";
import axios from "axios";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { backgroundColor, textColor } = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const navigate = useNavigate();

  const handleLoginChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response.data);

      if (response.data.success) {
        const { token, user } = response.data;
        Cookies.set("token", token);
        Cookies.set("role", user.role); // Set role in cookie
        // Dispatch action for successful login if needed
        console.log(user.role);
      }
      navigate("/");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="login-cover">
      <div
        className="wrapper fadeInDown"
        style={{ padding: "0", minHeight: "75vh" }}
      >
        <div id="formContent">
          <div className="fadeIn first">
            <img src="/logo.svg" id="icon" alt="User Icon" />
          </div>

          <form onSubmit={handleLogin}>
            <input
              type="text"
              className="fadeIn second"
              name="email"
              placeholder="Enter your Email"
              value={email}
              onChange={handleLoginChange}
              required
            />
            <input
              type="password"
              className="fadeIn third"
              name="password"
              placeholder="Enter your Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <input
              type="submit"
              className="fourth"
              value="Log In"
              style={{ backgroundColor: backgroundColor }}
            />
          </form>
          <div id="formFooter" style={{ backgroundColor: backgroundColor }}>
            <span style={{ color: "#fff", fontSize: "14px" }}>
              Don't have an account?{" "}
              <Link
                className="underlineHover"
                to="/signup"
                style={{ fontSize: "14px" }}
              >
                Register Here
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
