import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../../../config";
import { ToastContainer, toast } from "react-toastify";

const Index = () => {
  const [footerData, setFooterData] = useState({
    _id: "",
    logoLink: "",
    logoSrc: "",
    description: "",
    socialMediaLinks: [],
    usefulLinks: [],
    services: [],
    contact: {
      address: "",
      phone: "",
      email: "",
    },
    copyright: "",
  });

  useEffect(() => {
    fetchFooterData();
  }, []);

  const fetchFooterData = () => {
    axios
      .get(`${BASE_URL}/api/footer${footerData._id}`)
      .then((response) => {
        setFooterData(response.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching footer data:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFooterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    const reader = new FileReader();
    reader.readAsDataURL(file); // Read the file as a data URL

    reader.onload = () => {
      // Set the logoSrc to the data URL of the selected image
      setFooterData((prevData) => ({
        ...prevData,
        logoSrc: reader.result,
      }));
    };
  };

  const handleSocialMediaChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSocialMediaLinks = [...footerData.socialMediaLinks];
    updatedSocialMediaLinks[index] = {
      ...updatedSocialMediaLinks[index],
      [name]: value,
    };
    setFooterData((prevData) => ({
      ...prevData,
      socialMediaLinks: updatedSocialMediaLinks,
    }));
  };

  const handleUsefulLinkChange = (index, e) => {
    const { name, value } = e.target;
    const updatedUsefulLinks = [...footerData.usefulLinks];
    updatedUsefulLinks[index] = { ...updatedUsefulLinks[index], [name]: value };
    setFooterData((prevData) => ({
      ...prevData,
      usefulLinks: updatedUsefulLinks,
    }));
  };

  const handleServiceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedServices = [...footerData.services];
    updatedServices[index] = { ...updatedServices[index], [name]: value };
    setFooterData((prevData) => ({
      ...prevData,
      services: updatedServices,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send updated footer data to backend
    axios
      .put(`${BASE_URL}/api/footer/65c23093a62a075265f1a9bf`, footerData)
      .then((response) => {
        console.log("Footer updated successfully:", response.data);
        toast.success("Footer updated successfully");
      })
      .catch((error) => {
        console.error("Error updating footer:", error);
        toast.error("Failed to update footer");
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4" style={{ fontSize: "30px" }}>
        FOOTER UPDATE PAGE
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" style={{ fontSize: "20px" }}>
            Logo Link
          </label>
          <input
            type="text"
            className="form-control"
            name="logoLink"
            value={footerData.logoLink}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ fontSize: "20px" }}>
            Logo Source
          </label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            name="logoSrc"
            onChange={handleLogoChange}
          />
          {footerData.logoSrc && (
            <img
              src={footerData.logoSrc}
              alt="Logo Preview"
              className="mt-2 img-thumbnail"
            />
          )}
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ fontSize: "20px" }}>
            Description
          </label>
          <textarea
            className="form-control"
            name="description"
            value={footerData.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ fontSize: "20px" }}>
            Social Media Links
          </label>
          {footerData.socialMediaLinks.map((link, index) => (
            <div key={index} className="mb-3">
              <input
                type="text"
                className="form-control mb-1"
                name="url"
                placeholder="URL"
                value={link.url}
                onChange={(e) => handleSocialMediaChange(index, e)}
              />
              <input
                type="text"
                className="form-control"
                name="icon"
                placeholder="Icon"
                value={link.icon}
                onChange={(e) => handleSocialMediaChange(index, e)}
              />
            </div>
          ))}
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ fontSize: "20px" }}>
            Useful Links
          </label>
          {footerData.usefulLinks.map((link, index) => (
            <div key={index} className="mb-3">
              <input
                type="text"
                className="form-control mb-1"
                name="url"
                placeholder="URL"
                value={link.url}
                onChange={(e) => handleUsefulLinkChange(index, e)}
              />
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Name"
                value={link.name}
                onChange={(e) => handleUsefulLinkChange(index, e)}
              />
            </div>
          ))}
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ fontSize: "20px" }}>
            Services
          </label>
          {footerData.services.map((service, index) => (
            <div key={index} className="mb-3">
              <input
                type="text"
                className="form-control mb-1"
                name="url"
                placeholder="URL"
                value={service.url}
                onChange={(e) => handleServiceChange(index, e)}
              />
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Name"
                value={service.name}
                onChange={(e) => handleServiceChange(index, e)}
              />
            </div>
          ))}
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ fontSize: "20px" }}>
            Contact Address
          </label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={footerData.contact.address}
            onChange={(e) =>
              handleChange({
                target: { name: "address", value: e.target.value },
              })
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ fontSize: "20px" }}>
            Contact Phone
          </label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={footerData.contact.phone}
            onChange={(e) =>
              handleChange({ target: { name: "phone", value: e.target.value } })
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ fontSize: "20px" }}>
            Contact Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={footerData.contact.email}
            onChange={(e) =>
              handleChange({ target: { name: "email", value: e.target.value } })
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ fontSize: "20px" }}>
            Copyright
          </label>
          <input
            type="text"
            className="form-control"
            name="copyright"
            value={footerData.copyright}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-3"
          style={{ fontSize: "20px" }}
        >
          Update Footer
        </button>
      </form>
    </div>
  );
};

export default Index;
