import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../config";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import data from "layouts/dashboard/components/Projects/data";

const AboutAdmin = () => {
  const [loading, setLoading] = useState(true);
  const [aboutData, setAboutData] = useState({
    _id: "",
    content: "",
    image: "",
  });

  useEffect(() => {
    fetchAboutData();
  }, []);

  const fetchAboutData = () => {
    axios
      .get(`${BASE_URL}/api/about`, aboutData)
      .then((response) => {
        setAboutData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching about data:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAboutData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    const reader = new FileReader();
    reader.readAsDataURL(file); // Read the file as a data URL

    reader.onload = () => {
      // Set the logoSrc to the data URL of the selected image
      setAboutData((prevData) => ({
        ...prevData,
        image: reader.result,
      }));
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${BASE_URL}/api/about/${aboutData._id}`, aboutData);
      console.log("About updated successfully");
    } catch (error) {
      console.error("Error updating about data:", error);
      alert("Error updating about data. Please try again later.");
    }
  };

  return (
    <DashboardLayout>
      <div className="container mt-4">
        <h2 className="mb-4">About Page Admin</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">About Content</label>
              <textarea
                className="form-control"
                value={aboutData.content}
                onChange={handleChange}
                name="content"
                rows={10}
                placeholder="Enter about content here..."
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Upload Image</label>
              <input
                type="file"
                accept="image/*"
                className="form-control"
                name="image"
                onChange={handleImageChange}
              />
              {aboutData.image && (
                <img src={aboutData.image} alt="Image Preview" className="mt-2 img-thumbnail" />
              )}
            </div>
            <button type="submit" className="btn btn-primary">Update About</button>
          </form>
        )}
      </div>
    </DashboardLayout>
  );
};

export default AboutAdmin;
