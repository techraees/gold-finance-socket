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
    console.log(name, value); // Check if this prints the correct name and value
    setData((prevData) => ({
      ...prevData,
      name: value,
    }));
  };

  console.log(data);

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
    <div className="d-flex justify-content-center align-items-center w-75">
      <div className="d-flex flex-column">
        <h2>Dashboard Page</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Gold:</label>
            <input
              type="text"
              name="gold"
              value={data[0]?.gold || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Gold Img</label>
            <input
              type="file"
              accept="image/*"
              className="form-control"
              name="goldImg"
              onChange={handleLogoGoldChange}
            />
            {data[0]?.goldImg && (
              <img
                src={data[0].goldImg}
                alt="Gold Preview"
                className="mt-2 img-thumbnail"
              />
            )}
          </div>
          <div>
            <label>Silver:</label>
            <input
              type="text"
              name="silver"
              value={data[0]?.silver || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Silver Img</label>
            <input
              type="file"
              accept="image/*"
              className="form-control"
              name="silverImg"
              onChange={handleLogoSilverChange}
            />
            {data[0]?.silverImg && (
              <img
                src={data[0].silverImg}
                alt="Silver Preview"
                className="mt-2 img-thumbnail"
              />
            )}
          </div>
          <button type="submit">Update Data</button>
        </form>
      </div>
    </div>
  );
};

export default DashboardPage;
