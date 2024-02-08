import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../../../config";

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
        setContactData(response.data.data[0]);
        setFormData(response.data.data[0]);
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
      const response = await axios.put(
        `${BASE_URL}/api/contact/${contactData._id}`,
        formData
      );
      if (response.data.success) {
        console.log("Contact details updated successfully");
        setContactData(response.data.data);
      } else {
        console.error("Failed to update contact details");
      }
    } catch (error) {
      console.error("Error updating contact details:", error);
    }
  };

  return (
    <div className="container mt-5" style={{ border: "none" }}>
      <h4 className="mb-5" style={{ fontSize: "30px" }}>
        CONTACT US PAGE EDIT
      </h4>
      <div className="row">
        <div className="col-md-12">
          <div className="" style={{ background: "none" }}>
            <div className="card-body">
              <form style={{ width: "100%" }}>
                <div className="form-group">
                  <label
                    htmlFor="address"
                    style={{ fontSize: "20px" }}
                    className="mt-2"
                  >
                    Address:
                  </label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="phone"
                    style={{ fontSize: "20px" }}
                    className="mt-2"
                  >
                    Phone Number:
                  </label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="email"
                    className="mt-2"
                    style={{ fontSize: "20px" }}
                  >
                    Email:
                  </label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary mt-4"
                  onClick={handleSubmit}
                  style={{ fontSize: "20px" }}
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
