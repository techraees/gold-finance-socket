import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Import CSS styles

const SideBar = () => {
  const [activeLink, setActiveLink] = useState("Dashboard");
  const location = useLocation();
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

  const settingRightContent = [
    {
      path: "/admin",
      text: "Dashboard",
      icon: <i className="bx bx-grid-alt nav_icon"></i>,
    },
    {
      path: "/admin/footer",
      text: "Footer Edit",
      icon: <i className="bx bx-user nav_icon"></i>,
    },
    {
      path: "/admin/navbar",
      text: "Navbar Edit",
      icon: <i className="bx bx-message-square-detail nav_icon"></i>,
    },
    {
      path: "/admin/about",
      text: "About Edit",
      icon: <i className="bx bx-bookmark nav_icon"></i>,
    },
    {
      path: "/admin/contact",
      text: "Contact  Edit",
      icon: <i className="bx bx-folder nav_icon"></i>,
    },
    {
      path: "/admin/market",
      text: "Market Trendz",
      icon: <i className="bx bx-bar-chart-alt-2 nav_icon"></i>,
    },
    {
      path: "/admin/bank",
      text: "Bank Details",
      icon: <i className="bx bx-bar-chart-alt-2 nav_icon"></i>,
    },
    {
      path: "/admin/color",
      text: "Color Change",
      icon: <i className="bx bx-bar-chart-alt-2 nav_icon"></i>,
    },
    {
      path: "/admin/update",
      text: "Update",
      icon: <i className="bx bx-bar-chart-alt-2 nav_icon"></i>,
    },
  ];
  return (
    <>
      <div className="l-navbar" id="nav-bar">
        <nav className="nav">
          <div>
            <Link to="/admin" className="nav_logo">
              <i
                className="bx bx-layer nav_logo-icon"
                style={{ fontSize: "26px", textDecoration: "none" }}
              ></i>
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
            </Link>
            <div className="nav_list" style={{ paddingLeft: "10px" }}>
              {settingRightContent.map((item) => {
                return (
                  <Link
                    to={item.path}
                    className={`nav_link ${
                      location.pathname === item.path ? "active" : ""
                    }`}
                  >
                    {item.icon}
                    <span className="nav_name">{item.text}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
