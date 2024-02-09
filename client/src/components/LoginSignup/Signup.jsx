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
      closeModal();
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error, maybe show an error message to the user
    }
  };

  return (
    <Modal
      show
      onHide={closeModal}
      dialogClassName="modal-dialog-scrollable"
      className="custom-modal-sm"
    >
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
                  type="password"
                  id="password"
                  className=" third"
                  placeholder="PASSWORD"
                  value={formData.password}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  id="confirmPassword"
                  className=" third"
                  placeholder="CONFIRM PASSWORD"
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
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Signup;
