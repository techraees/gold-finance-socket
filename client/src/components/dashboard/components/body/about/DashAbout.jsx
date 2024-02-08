import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../../../config";
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
    <section className="container mt-5">
      <div className="">
        <h2 className="mb-4" style={{ fontSize: "30px" }}>
          About Edit Page
        </h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label" style={{ fontSize: "20px" }}>
                About Content
              </label>
              <textarea
                className="form-control mt-3"
                value={aboutData.content}
                onChange={handleChange}
                name="content"
                rows={10}
                placeholder="Enter about content here..."
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ fontSize: "20px" }}>
                Upload Image
              </label>
              <input
                type="file"
                accept="image/*"
                className="form-control mt-3"
                name="image"
                onChange={handleImageChange}
              />
              {aboutData.image && (
                <img
                  src={aboutData.image}
                  alt="Image Preview"
                  className="mt-2 img-thumbnail mt-3"
                />
              )}
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-3 mb-5"
              style={{ fontSize: "20px" }}
            >
              Update About
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default AboutAdmin;
