import React, { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import "./../../../public/css/login/color.css";
import "./../../../public/css/login/style.css";
import "./../../../public/css/login/color-picker.css";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";

const Signup = ({ closeModal }) => {
  const { backgroundColor, textColor } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/register",
        formData,
        {
          body: JSON.stringify(formData),
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error, maybe show an error message to the user
    }
  };

  return (
    <div className="login-cover">
      <div className="wrapper" style={{ padding: "0", minHeight: "75vh" }}>
        <div id="formContent">
        <div className="fadeIn first">
            <img src="/logo.svg" id="icon" alt="User Icon" />
          </div>

          <form className="fadeInDown" onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              className=" second"
              placeholder="Enter your Jeweller Name "
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              id="email"
              className=" third"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              id="password"
              className=" third"
              placeholder="Enter your Password"
              value={formData.password}
              onChange={handleChange}
            />
            <input
              type="password"
              id="confirmPassword"
              className=" third"
              placeholder="Enter your Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            <input
              type="submit"
              className="fourth"
              value="SUBMIT"
              id="btnregister"
              style={{ backgroundColor: backgroundColor }}
            />
          </form>
          <div id="formFooter" style={{ backgroundColor: backgroundColor }}>
            <span style={{ color: "#fff", fontSize: "14px" }}>
              Do have an account?{" "}
              <Link
                className="underlineHover"
                to="/login"
                style={{ fontSize: "14px" }}
              >
                Login Here
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
