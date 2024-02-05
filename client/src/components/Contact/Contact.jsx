import React, { useState } from "react";
import "./../../../public/css/contact/otr.css";
import "./../../../public/css/contact/style.css";
import "./../../../public/css/contact/style(1).css";
import "./../../../public/css/contact/bootstrap.min.css";
import "./../../../public/css/contact/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="main-cover">
      <div className="container">
        <div className="liverate-cover">
          <div className="liverate-title">
            <h4>CONTACT US</h4>
          </div>
        </div>
        <div className="bnk-cvr">
          <div className="bank-cover">
            <div className="contact-cover">
              <div className="col-md-4">
                <div className="cnt-detail-cover">
                  <p>
                    <i className="fa fa-map"></i>
                    <strong>ADDRESS</strong>
                    <span className="address1"></span>
                    <span className="address2"></span>
                    <span className="address3"></span>
                  </p>
                  <p>
                    <i className="fa fa-mobile"></i>
                    <strong>NUMBER</strong>
                    <span className="bookingno1">+91 84484 40373</span>
                    {/* Add more phone numbers as needed */}
                  </p>
                  <p>
                    <i className="fa fa-envelope"></i>
                    <strong>E-MAIL</strong>
                    <span className="email1"></span>
                    <span className="email2"></span>
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
                                <label htmlFor="form_name">Name *</label>
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
                                <label htmlFor="form_email">Email *</label>
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
                                <label htmlFor="form_phone">Phone *</label>
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
                                <label htmlFor="form_email">Subject</label>
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
                                <label htmlFor="form_message">Message *</label>
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
