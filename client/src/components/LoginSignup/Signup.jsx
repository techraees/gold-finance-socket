import React, { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import "./../../../public/css/login/color.css";
import "./../../../public/css/login/style.css";
import "./../../../public/css/login/color-picker.css";
import { ThemeContext } from "../../context/ThemeContext";

const Signup = ({ closeModal }) => {
  const { backgroundColor, textColor } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    companyType: "",
    billingAddress: "",
    city: "",
    state: "",
    pincode: "",
    gst: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, gstDocument: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      const response = await axios.post(
        "http://localhost:3000/api/auth/signup",
        formDataToSend
      );
      console.log(response.data);
      // Handle success
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error
    }
  };

  return (
    <Modal show onHide={closeModal} className="custom-modal-sm">
      <Modal.Header style={{ backgroundColor: backgroundColor }}>
        <div className="d-flex" style={{ width: "100%" }}>
          <Modal.Title
            className="d-flex  justify-content-center"
            style={{ width: "96%" }}
          >
            <h4
              className="panel-title"
              style={{
                textAlign: "center",
                fontWeight: "700",
                color: "white",
                fontSize: "18px",
              }}
            >
              Registration
            </h4>
          </Modal.Title>
          <img
            src="/cancle.png" // Adjust the path here
            className="close"
            data-dismiss="modal"
            onClick={closeModal}
            aria-label="Close"
            alt=""
            style={{ width: "40px", height: "40px", alignItems: "center" }}
          />
        </div>
      </Modal.Header>

      <Modal.Body>
        <div className="login-cover">
          <div className="wrapper">
            <div id="formContent">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="name"
                  className=" second"
                  placeholder="JEWELLER NAME"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  id="email"
                  className=" third"
                  placeholder="E-MAIL"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  id="phoneNumber"
                  className=" third"
                  placeholder="CONTACT NUMBER"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  id="companyName"
                  className=" third"
                  placeholder="COMPANY NAME"
                  value={formData.companyName}
                  onChange={handleChange}
                />
                <select
                  className="common-select custom-select"
                  id="companyType"
                  style={{
                    border: "1px solid #e0e0e0",
                    width: "85%",
                    padding: "7px 32px",
                    fontSize: "15px",
                    textAlign: "center",
                    margin: "5px",
                    borderRadius: "5px",
                    backgroundColor: "#e4f7f6",
                    height: "35px", // Adjust the height here
                  }}
                  value={formData.companyType}
                  onChange={handleChange}
                >
                  <option>COMPANY TYPE</option>
                  <option value="Proprietorship">Proprietorship</option>
                  <option value="Partnership / LLC">Partnership / LLC</option>
                  <option value="HUF">HUF</option>
                  <option value="Public / Private company">
                    Public / Private company
                  </option>
                </select>
                <input
                  type="text"
                  id="billingAddress"
                  className=" third"
                  placeholder="BILLING ADDRESS"
                  value={formData.billingAddress}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  id="city"
                  className=" third"
                  placeholder="CITY"
                  value={formData.city}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  id="state"
                  className=" third"
                  placeholder="STATE"
                  value={formData.state}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  id="pincode"
                  className=" third"
                  placeholder="PINCODE"
                  value={formData.pincode}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  id="gst"
                  className=" third"
                  placeholder="GST"
                  value={formData.gst}
                  onChange={handleChange}
                />
                <div className="new-file">
                  <label htmlFor="file">Upload GST Document</label>
                  <input
                    type="file"
                    id="gstDocument"
                    name="gstDocument"
                    style={
                      {
                        /* your styles */
                      }
                    }
                    onChange={handleFileChange}
                  />
                </div>
                <p
                  style={
                    {
                      /* your styles */
                    }
                  }
                >
                  By signing up, I hereby accept the terms and conditions
                  mentioned in the{" "}
                  <a
                    href="https://safegoldstatic.s3.ap-south-1.amazonaws.com/Bullion-Platform-EULA.pdf"
                    target="_blank"
                    className="agreement"
                  >
                    <span
                      style={
                        {
                          /* your styles */
                        }
                      }
                    >
                      Bullion Agreement Document
                    </span>
                  </a>
                </p>
                <input
                  type="submit"
                  className="fourth"
                  value="SUBMIT"
                  id="btnregister"
                  style={{ backgroundColor: backgroundColor }}
                />
              </form>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Signup;
