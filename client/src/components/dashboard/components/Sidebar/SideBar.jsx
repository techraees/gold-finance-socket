import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ColorChange from "./../body/colorChanging/index.jsx";
import FooterEdit from "./../body/Footer/index.jsx";
import NavbarEdit from "./../body/Navbar/index.jsx";
import ContactEdit from "./../body/contact/index.jsx";
import AboutEdit from "./../body/about/index.jsx";
import MarketTrendz from "./../body/market/index.jsx";
import BankDetails from "./../body/bankDetail/index.jsx";

// Import CSS styles

const SideBar = () => {
  const [activeLink, setActiveLink] = useState("Dashboard");
  useEffect(() => {
    const showNavbar = (toggleId, navId, bodyId, headerId) => {
      const toggle = document.getElementById(toggleId);
      const nav = document.getElementById(navId);
      const bodypd = document.getElementById(bodyId);
      const headerpd = document.getElementById(headerId);

      if (toggle && nav && bodypd && headerpd) {
        toggle.addEventListener("click", () => {
          nav.classList.toggle("show");
          toggle.classList.toggle("bx-x");
          bodypd.classList.toggle("body-pd");
          headerpd.classList.toggle("body-pd");
        });
      } else {
        console.error("One or more elements not found.");
      }
    };

    showNavbar("header-toggle", "nav-bar", "body-pd", "header");
  }, []);
  const handleNavLinkClick = (navName) => {
    setActiveLink(navName);
  };
  return (
    <>
      <div className="l-navbar" id="nav-bar">
        <nav className="nav">
          <div>
            <Link to="/dashboard" className="nav_logo">
              <i
                className="bx bx-layer nav_logo-icon"
                style={{ fontSize: "26px", textDecoration: "none" }}
              ></i>{" "}
              <span
                className="nav_logo-name"
                style={{
                  fontSize: "26px",
                  textDecoration: "none",
                  fontWeight: 800,
                }}
              >
                Gold DashBoard
              </span>{" "}
            </Link>{" "}
            <div className="nav_list" style={{ paddingLeft: "10px" }}>
              <a
                href="#"
                className={`nav_link ${
                  activeLink === "Dashboard" ? "active" : ""
                }`}
                onClick={() => handleNavLinkClick("Dashboard")}
              >
                {" "}
                <i className="bx bx-grid-alt nav_icon"></i>{" "}
                <span className="nav_name">Dashboard</span>{" "}
              </a>
              <a
                href="#"
                className={`nav_link ${
                  activeLink === "Footer Edit" ? "active" : ""
                }`}
                onClick={() => handleNavLinkClick("Footer Edit")}
              >
                {" "}
                <i className="bx bx-user nav_icon"></i>{" "}
                <span className="nav_name">Footer Edit</span>{" "}
              </a>
              <a
                href="#"
                className={`nav_link ${
                  activeLink === "Navbar Edit" ? "active" : ""
                }`}
                onClick={() => handleNavLinkClick("Navbar Edit")}
              >
                {" "}
                <i className="bx bx-message-square-detail nav_icon"></i>{" "}
                <span className="nav_name">Navbar Edit</span>{" "}
              </a>
              <a
                href="#"
                className={`nav_link ${
                  activeLink === "About Edit" ? "active" : ""
                }`}
                onClick={() => handleNavLinkClick("About Edit")}
              >
                {" "}
                <i className="bx bx-bookmark nav_icon"></i>{" "}
                <span className="nav_name">About Edit</span>{" "}
              </a>
              <a
                href="#"
                className={`nav_link ${
                  activeLink === "Contact Edit" ? "active" : ""
                }`}
                onClick={() => handleNavLinkClick("Contact Edit")}
              >
                {" "}
                <i className="bx bx-folder nav_icon"></i>{" "}
                <span className="nav_name">Contact Edit</span>{" "}
              </a>
              <a
                href="#"
                className={`nav_link ${
                  activeLink === "Market Trendz" ? "active" : ""
                }`}
                onClick={() => handleNavLinkClick("Market Trendz")}
              >
                {" "}
                <i className="bx bx-bar-chart-alt-2 nav_icon"></i>{" "}
                <span className="nav_name">Market Trendz</span>{" "}
              </a>
              <a
                href="#"
                className={`nav_link ${
                  activeLink === "Bank Details" ? "active" : ""
                }`}
                onClick={() => handleNavLinkClick("Bank Details")}
              >
                {" "}
                <i className="bx bx-bar-chart-alt-2 nav_icon"></i>{" "}
                <span className="nav_name">Bank Details</span>{" "}
              </a>
              <a
                href="#"
                className={`nav_link ${
                  activeLink === "Color Change" ? "active" : ""
                }`}
                onClick={() => handleNavLinkClick("Color Change")}
              >
                {" "}
                <i className="bx bx-bar-chart-alt-2 nav_icon"></i>{" "}
                <span className="nav_name">Color Change</span>{" "}
              </a>
              {/* <a
                href="#"
                className={`nav_link ${
                  activeLink === "Update" ? "active" : ""
                }`}
                onClick={() => handleNavLinkClick("Update")}
              >
                {" "}
                <i className="bx bx-bar-chart-alt-2 nav_icon"></i>{" "}
                <span className="nav_name">Update</span>{" "}
              </a> */}
            </div>
          </div>
          <a href="#" className="nav_link">
            {" "}
            <i className="bx bx-log-out nav_icon"></i>{" "}
            <span className="nav_name">SignOut</span>{" "}
          </a>
        </nav>
      </div>
      {/* Container Main start */}
      <div className="bg-light" style={{ width: "100%" }}>
        {activeLink == "Color Change" && <ColorChange />}
        {activeLink == "Footer Edit" && <FooterEdit />}
        {activeLink == "Navbar Edit" && <NavbarEdit />}
        {activeLink == "Contact Edit" && <ContactEdit />}
        {activeLink == "About Edit" && <AboutEdit />}
        {activeLink == "Market Trendz" && <MarketTrendz />}
        {activeLink == "Bank Details" && <BankDetails />}
      </div>

      {/* Container Main end */}
    </>
  );
};

export default SideBar;
