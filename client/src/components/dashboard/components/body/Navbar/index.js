import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "./../../config";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

const Index = () => {
  const [navItems, setNavItems] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    label: "",
    link: ""
  });
  console.log(formData)
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    // Fetch navbar data from backend
    axios
      .get(`${BASE_URL}/api/navbar`)
      .then((response) => {
        setNavItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching navbar data:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // If an item is selected, send a PUT request to update it
    if (selectedItemId) {
      axios
        .put(`${BASE_URL}/api/navbar/${selectedItemId}`, formData)
        .then((response) => {
          console.log("Navigation item updated successfully:", response.data);
          // Fetch updated data from backend
          axios
            .get(`${BASE_URL}/api/navbar`)
            .then((response) => {
              setNavItems(response.data); // Update navItems state with updated data
            })
            .catch((error) => {
              console.error("Error fetching updated navbar data:", error);
            });
          // Optionally, update the state or show a success message
          setSelectedItemId(null);
          setFormData({ id: "", label: "", link: "" });
        })
        .catch((error) => {
          console.error("Error updating navigation item:", error);
        });
    } else {
      // Otherwise, send a POST request to create a new navigation item
      axios
        .post(`${BASE_URL}/api/navbar`, formData)
        .then((response) => {
          console.log("Navigation item created successfully:", response.data);
          // Update navItems state with the new item
          setNavItems([...navItems, response.data]);
          // Optionally, update the state or show a success message
          setFormData({ id: "", label: "", link: "" });
        })
        .catch((error) => {
          console.error("Error creating navigation item:", error);
        });
    }
  };
  
  

  const handleDelete = (_id) => {
    // Send request to backend to delete the navigation item with the given _id
    axios
      .delete(`${BASE_URL}/api/navbar/${_id}`)
      .then((response) => {
        console.log("Navigation item deleted successfully:", response.data);
        // Optionally, update the state or show a success message
        setNavItems(navItems.filter(item => item._id !== _id)); // Remove deleted item from state
      })
      .catch((error) => {
        console.error("Error deleting navigation item:", error);
      });
  };
  const handleUpdate = (item) => {
    // Set the selected item ID and populate the form with its data
    setSelectedItemId(item._id);
    setFormData({ id: item._id, label: item.label, link: item.link });
  };
  

  return (
    <DashboardLayout>
      <div className="container mt-4">
        <h2>Welcome to the Dashboard</h2>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="id" value={formData.id} />
          <div className="mb-3">
            <label className="form-label">Label</label>
            <input
              type="text"
              className="form-control"
              name="label"
              value={formData.label}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Link</label>
            <input
              type="text"
              className="form-control"
              name="link"
              value={formData.link}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary me-2">
            {selectedItemId ? "Update" : "Create"}
          </button>
          {selectedItemId && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                setSelectedItemId(null);
                setFormData({ id: "", label: "", link: "" });
              }}
            >
              Cancel
            </button>
          )}
        </form>
        <ul className="list-group mt-4">
          {navItems.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <Link to={item.link} className="nav-link">
                {item.label}
              </Link>
              <div>
                <button className="btn btn-warning me-2" onClick={() => handleUpdate(item)}>Update</button>
                <button className="btn btn-danger" onClick={() => handleDelete(item._id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </DashboardLayout>
  );
};

export default Index;
