import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./../../../public/css/contact/otr.css";
import "./../../../public/css/contact/style.css";
import "./../../../public/css/contact/style(1).css";
import "./../../../public/css/contact/bootstrap.min.css";
import "./../../../public/css/contact/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BASE_URL } from "../../config";
import { ThemeContext } from "../../context/ThemeContext";

const Contact = () => {
  const { backgroundColor, textColor } = useContext(ThemeContext);
  const [contactData, setContactData] = useState(null);
  const [formData, setFormData] = useState({
    address: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/contact`);
        if (response.data.success && response.data.data.length > 0) {
          setContactData(response.data.data[0]); // Access the first item in the array
        } else {
          console.error("No contact data found.");
        }
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };

    fetchContactData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      // Handle form submission logic here
      // You can use formData to access form fields data
      await axios.post("/api/submit", formData);
      console.log("Form submitted:", formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="main-cover">
      <div className="container">
        <div className="liverate-cover">
          <div className="liverate-title">
            <h4 style={{ color: backgroundColor }}>CONTACT US</h4>
          </div>
        </div>
        <div className="bnk-cvr">
          <div className="bank-cover">
            <div className="contact-cover">
              <div className="col-md-4">
                <div className="cnt-detail-cover">
                  <p>
                    <i className="fa fa-map"></i>
                    <strong style={{ color: backgroundColor }}>ADDRESS</strong>
                    <span className="address1">{contactData?.address}</span>
                  </p>
                  <p>
                    <i className="fa fa-mobile"></i>
                    <strong style={{ color: backgroundColor }}>NUMBER</strong>
                    <span className="bookingno1">{contactData?.phone}</span>
                  </p>
                  <p>
                    <i className="fa fa-envelope"></i>
                    <strong style={{ color: backgroundColor }}>E-MAIL</strong>
                    <span className="email1">{contactData?.email}</span>
                  </p>
                </div>
              </div>
              <div className="col-md-8">
                <div className="feedback-cover1">
                  <div className="feedback-cover">
                    <div className="cnt-rg-details">
                      <div className="for-img-look">
                        <div
                          id="contact-form"
                          name="contact_form"
                          action=""
                          method="post"
                        >
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label
                                  htmlFor="form_name"
                                  style={{ color: backgroundColor }}
                                >
                                  Name *
                                </label>
                                <input
                                  id="txtName"
                                  type="text"
                                  name="name"
                                  className="form-control form-left"
                                  placeholder="Please enter your Name"
                                  required=""
                                  onChange={handleChange}
                                />
                                <div className="help-block with-errors"></div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label
                                  htmlFor="form_email"
                                  style={{ color: backgroundColor }}
                                >
                                  Email *
                                </label>
                                <input
                                  id="txtEmail"
                                  type="text"
                                  name="email"
                                  className="form-control form-right"
                                  placeholder="Please enter your email"
                                  required=""
                                  onChange={handleChange}
                                />
                                <div className="help-block with-errors"></div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label
                                  htmlFor="form_phone"
                                  style={{ color: backgroundColor }}
                                >
                                  Phone *
                                </label>
                                <input
                                  id="txtPhone"
                                  type="number"
                                  name="phone"
                                  className="form-control form-left"
                                  placeholder="Please enter your phone"
                                  onChange={handleChange}
                                />
                                <div className="help-block with-errors"></div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label
                                  htmlFor="form_email"
                                  style={{ color: backgroundColor }}
                                >
                                  Subject
                                </label>
                                <input
                                  id="sub"
                                  type="text"
                                  name="subject"
                                  className="form-control form-right"
                                  placeholder="Please enter Subject"
                                  onChange={handleChange}
                                />
                                <div className="help-block with-errors"></div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <label
                                  htmlFor="form_message"
                                  style={{ color: backgroundColor }}
                                >
                                  Message *
                                </label>
                                <textarea
                                  id="message"
                                  name="message"
                                  className="form-control"
                                  placeholder="Message for me *"
                                  rows="4"
                                  required=""
                                  onChange={handleChange}
                                ></textarea>
                                <div className="help-block with-errors"></div>
                              </div>
                            </div>
                            <div
                              className="form-group"
                              style={{ margin: "0px 0px 10px" }}
                            >
                              <div className="col-md-12 text-center">
                                <p
                                  id="msgForSubmit"
                                  className="alert alert-success alert-autocloseable-success"
                                  style={{ display: "none" }}
                                ></p>
                              </div>
                            </div>
                            <div
                              className="form-group"
                              style={{ margin: "0px 0px 10px" }}
                            >
                              <div className="text-center">
                                <button
                                  type="button"
                                  className="thm-btn bgclr-1"
                                  onClick={handleSubmit}
                                  style={{ backgroundColor: backgroundColor }}
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
