import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <section className="">
        <div class="header-top-marquee">
          <marquee class="marquee1"></marquee>
        </div>
        <div class="menu-cover menu-first">
          <div class="container">
            <div class="col-sm-4 col-md-4 res">
              <Link to="/" className="navbar-brand">
                <img src="/logo.svg" alt="" />
              </Link>
            </div>
            <div class="col-sm-4 col-md-4 oneres">
              <div class="booking-number">
                <h2>
                  <i class="fa fa-phone"></i>BOOKING NUMBER
                </h2>
                <div class="bk-text">
                  <span class="bookingno1">+91 84484 40373</span> |
                  <span class="bookingno2"></span>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-md-4 oneres">
              <div class="login-btn">
                <Link className="login-btn-cvr" to="/login" target="_blank">
                  {" "}
                  Login / sign up
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div class="menu-cover menu-second">
          <nav
            class="navbar navbar-expand-lg ftco_navbar ftco-navbar-light"
            id="ftco-navbar"
          >
            <div class="container">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#ftco-nav"
                aria-controls="ftco-nav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="fa fa-bars"></span> Menu
              </button>
              <div class="collapse navbar-collapse" id="ftco-nav">
                <ul class="navbar-nav ml-auto ">
                  <li class="nav-item pgabout">
                    <Link to="/about" className="nav-link">
                      About Us
                    </Link>
                  </li>
                  <li class="nav-item pgliverate">
                    <a
                      class="nav-link"
                      href="https://bullion.safegold.in/liverate.html"
                    >
                      Liverates
                    </a>
                  </li>
                  {/* <!-- <li class="nav-item pgcoin">
                  <a class="nav-link" href="coins.html">Coins</a>
              </li> --> */}

                  <li class="nav-item pgupdate">
                    <a
                      class="nav-link"
                      href="https://bullion.safegold.in/update.html"
                    >
                      Updates
                    </a>
                  </li>
                  <li class="nav-item pgbankdetail">
                    <a
                      class="nav-link"
                      href="https://bullion.safegold.in/bank-detail.html"
                    >
                      Bank Details
                    </a>
                  </li>
                  <li class="nav-item pgmarkettrendz">
                    <a
                      class="nav-link"
                      href="https://bullion.safegold.in/market-trendz.html"
                    >
                      Market Trendz
                    </a>
                  </li>
                  <li class="nav-item pgecocalender">
                    <a
                      class="nav-link"
                      href="https://bullion.safegold.in/economic-calendar.html"
                    >
                      Economic Calendar
                    </a>
                  </li>
                  <li class="nav-item pgcontact">
                    <a
                      class="nav-link"
                      href="https://bullion.safegold.in/contact.html"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar;
