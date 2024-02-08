import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../../../config";

const Index = () => {
  const [bankData, setBankData] = useState(null);
  const [formData, setFormData] = useState({
    bankName: "",
    accountName: "",
    accountNumber: "",
    ifscCode: "",
    branchName: "",
  });

  useEffect(() => {
    // Fetch bank details from the backend API
    axios
      .get(`${BASE_URL}/api/bank-details`)
      .then((response) => {
        setBankData(response.data);
        setFormData(response.data); // Initialize form data with fetched bank details
      })
      .catch((error) => {
        console.error("Error fetching bank details:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send PUT request to update bank details
    axios
      .put(`${BASE_URL}/api/bank-details`, formData)
      .then((response) => {
        console.log("Bank details updated successfully:", response.data);
        setBankData(formData); // Update bankData state with new data
      })
      .catch((error) => {
        console.error("Error updating bank details:", error);
      });
  };

  return (
    <div className="container mt-5">
      <h4 style={{ fontSize: "30px" }}>BANK DETAILS EDIT</h4>
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={handleSubmit}>
            <div className="mb-3 mt-4">
              <label
                htmlFor="bankName"
                className="form-label"
                style={{ fontSize: "20px" }}
              >
                BANK NAME
              </label>
              <input
                type="text"
                className="form-control"
                id="bankName"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="accountName"
                className="form-label"
                style={{ fontSize: "20px" }}
              >
                ACCOUNT NAME
              </label>
              <input
                type="text"
                className="form-control"
                id="accountName"
                name="accountName"
                value={formData.accountName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="accountNumber"
                className="form-label"
                style={{ fontSize: "20px" }}
              >
                ACCOUNT NUMBER
              </label>
              <input
                type="text"
                className="form-control"
                id="accountNumber"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="ifscCode"
                className="form-label"
                style={{ fontSize: "20px" }}
              >
                IFSC CODE
              </label>
              <input
                type="text"
                className="form-control"
                id="ifscCode"
                name="ifscCode"
                value={formData.ifscCode}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="branchName"
                className="form-label"
                style={{ fontSize: "20px" }}
              >
                BRANCH NAME
              </label>
              <input
                type="text"
                className="form-control"
                id="branchName"
                name="branchName"
                value={formData.branchName}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ fontSize: "20px" }}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
