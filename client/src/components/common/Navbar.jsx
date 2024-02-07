import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "./../../config";
import { ThemeContext } from "./../../context/ThemeContext.jsx"; // Change import to ThemeContext

const Navbar = () => {
  const { backgroundColor, textColor } = useContext(ThemeContext);
  const [navItems, setNavItems] = useState([]);

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

  return (
    <section>
      <div
        className="header-top-marquee"
        style={{ backgroundColor: backgroundColor }}
      >
        <marquee className="marquee1" style={{ color: textColor }}>
          Your marquee content here
        </marquee>
      </div>
      <div className="menu-cover menu-first">
        <div className="container">
          <div className="col-sm-4 col-md-4 res">
            <Link to="/" className="navbar-brand">
              <img src="/logo.svg" alt="" />
            </Link>
          </div>
          <div className="col-sm-4 col-md-4 oneres">
            <div className="booking-number">
              <h2>
                <i className="fa fa-phone"></i>BOOKING NUMBER
              </h2>
              <div className="bk-text">
                <span className="bookingno1">+91 84484 40373</span> |
                <span className="bookingno2"></span>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4 oneres">
            <div className="login-btn">
              <Link
                className="login-btn-cvr"
                to="/login"
                style={{ color: textColor, backgroundColor: backgroundColor }}
              >
                {" "}
                Login / sign up
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className="menu-cover menu-second"
        style={{ backgroundColor: backgroundColor }}
      >
        <nav
          className="navbar navbar-expand-lg ftco_navbar ftco-navbar-light"
          id="ftco-navbar"
          style={{ backgroundColor: backgroundColor }}
        >
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#ftco-nav"
              aria-controls="ftco-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fa fa-bars"></span> Menu
            </button>
            <div
              className="collapse navbar-collapse"
              id="ftco-nav"
              style={{ backgroundColor: backgroundColor }}
            >
              <ul className="navbar-nav ml-auto ">
                {navItems.map((item, index) => (
                  <li className="nav-item" key={index}>
                    <Link to={item.link} className="nav-link">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
