import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./Footer.css"; // Make sure to import the CSS file
import { BASE_URL } from "../../config"; // Assuming config.js is in the same directory level
import { ThemeContext } from "../../context/ThemeContext";

const Footer = () => {
  const { backgroundColor, textColor } = useContext(ThemeContext);
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    // Fetch footer data from backend
    axios
      .get(`${BASE_URL}/api/footer`)
      .then((response) => {
        setFooterData(response.data[0]); // Assuming you're fetching a single footer
      })
      .catch((error) => {
        console.error("Error fetching footer data:", error);
      });
  }, []);

  return (
    <div>
      {footerData && (
        <div id="ftr">
          <footer>
            <div className="container">
              <div className="footer-top">
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-12">
                    <a className="logo-wrapper" href={footerData.logoLink}>
                      <img src={footerData.logoSrc} alt="" />
                    </a>
                    <p className="txt">{footerData.description}</p>
                    <div className="social-media order-lg-last d-flex">
                      {footerData.socialMediaLinks.map((link, index) => (
                        <a
                          href={link.url}
                          className="d-flex align-items-center justify-content-center"
                          key={index}
                        >
                          <span
                            className={`fa fa-${link.icon}`}
                            style={{
                              borderColor: backgroundColor,
                              color: backgroundColor,
                            }}
                          />
                          <i
                            className="sr-only"
                            style={{ color: backgroundColor }}
                          >
                            {link.name}
                          </i>
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="col-xl-2 offset-xl-1 col-lg-2 col-md-3">
                    <h4 style={{ color: backgroundColor }}>Useful Links</h4>
                    <ul className="links">
                      {footerData.usefulLinks.map((link, index) => (
                        <li key={index}>
                          <a href={link.url}>
                            <i className="fa fa-angle-right" /> {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3">
                    <h4 style={{ color: backgroundColor }}>Services</h4>
                    <ul className="links">
                      {footerData.services.map((service, index) => (
                        <li key={index}>
                          <a href={service.url}>
                            <i className="fa fa-angle-right" /> {service.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <h4 style={{ color: backgroundColor }}>Contact Us</h4>
                    <div className="contact-infos">
                      <div className="single-info">
                        <div className="icon-wrapper">
                          <i className="fa fa-street-view" aria-hidden="true" />
                        </div>
                        <p className="address1">{footerData.contact.address}</p>
                      </div>
                      <div className="single-info">
                        <div className="icon-wrapper">
                          <i className="fa fa-phone" aria-hidden="true" />
                        </div>
                        <p className="bookingno1">{footerData.contact.phone}</p>
                      </div>
                      <div className="single-info">
                        <div className="icon-wrapper">
                          <i className="fa fa-envelope-o" aria-hidden="true" />
                        </div>
                        <p className="email1">{footerData.contact.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <p>{footerData.copyright}</p>
              </div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Footer;
