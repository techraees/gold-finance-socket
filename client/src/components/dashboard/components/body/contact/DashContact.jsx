import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../../../configconfig.js";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

const Index = () => {
  const [contactData, setContactData] = useState(null);
  const [formData, setFormData] = useState({
    address: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    fetchContactData();
  }, []);

  const fetchContactData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/contact`);
      if (response.data.success && response.data.data.length > 0) {
        setContactData(response.data.data[0]); // Access the first item in the array
        setFormData(response.data.data[0]); // Set form data initially with contact data
      } else {
        console.error("No contact data found.");
      }
    } catch (error) {
      console.error("Error fetching contact data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.put(`${BASE_URL}/api/contact/${contactData._id}`, formData);
      if (response.data.success) {
        console.log("Contact details updated successfully");
        setContactData(response.data.data); // Update contactData state with the updated data
      } else {
        console.error("Failed to update contact details");
      }
    } catch (error) {
      console.error("Error updating contact details:", error);
    }
  };

  return (
    <DashboardLayout>
      <div className="container mt-4">
        <h4>CONTACT US</h4>
        <div className="row">
          <div className="col-md-4">
            <div className="cnt-detail-cover">
              <p>
                <i className="fa fa-map"></i>
                <strong>ADDRESS</strong>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </p>
              <p>
                <i className="fa fa-mobile"></i>
                <strong>NUMBER</strong>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </p>
              <p>
                <i className="fa fa-envelope"></i>
                <strong>E-MAIL</strong>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </p>
            </div>
            <div id="contact-form" name="contact_form" action="" method="post">
                      <button type="button" className="btn btn-primary" onClick={handleSubmit}>Update</button>
                    </div>
          </div>
         
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
