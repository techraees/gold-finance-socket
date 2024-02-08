import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../../../config";

const DashboardPage = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/market`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleLogoGoldChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setData((prevData) => ({
        ...prevData,
        goldImg: reader.result,
      }));
    };
  };

  const handleLogoSilverChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setData((prevData) => ({
        ...prevData,
        silverImg: reader.result,
      }));
    };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${BASE_URL}/api/market/${data._id}`,
        data
      );
      console.log("Data updated successfully:", response.data);
      fetchData();
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex flex-column">
        <h2 className="mb-4" style={{ fontSize: "30px" }}>
          MARKET TRENDZ PAGE EDIT
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" style={{ fontSize: "20px" }}>
              Gold:
            </label>
            <input
              type="text"
              className="form-control"
              name="gold"
              value={data?.gold || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ fontSize: "20px" }}>
              Gold Img
            </label>
            <input
              type="file"
              accept="image/*"
              className="form-control"
              name="goldImg"
              onChange={handleLogoGoldChange}
            />
            {data?.goldImg && (
              <img
                src={data.goldImg}
                alt="Gold Preview"
                className="mt-2 img-thumbnail"
              />
            )}
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ fontSize: "20px" }}>
              Silver:
            </label>
            <input
              type="text"
              className="form-control"
              name="silver"
              value={data?.silver || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ fontSize: "20px" }}>
              Silver Img
            </label>
            <input
              type="file"
              accept="image/*"
              className="form-control"
              name="silverImg"
              onChange={handleLogoSilverChange}
            />
            {data?.silverImg && (
              <img
                src={data.silverImg}
                alt="Silver Preview"
                className="mt-2 img-thumbnail"
              />
            )}
          </div>
          <button
            type="submit"
            className="btn btn-primary mt-4"
            style={{ fontSize: "20px", padding: "5px 10px" }}
          >
            Update Data
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardPage;
