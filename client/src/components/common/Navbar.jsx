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
                <Link className="login-btn-cvr" to="/login" >
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
                    <Link to="/liverates" className="nav-link">
                      Liverates
                    </Link>
                  </li>
                  {/* <!-- <li class="nav-item pgcoin">
                  <a class="nav-link" href="coins.html">Coins</a>
              </li> --> */}

                  <li class="nav-item pgupdate">
                    <Link to="/update" className="nav-link">
                      Updates
                    </Link>
                  </li>
                  <li class="nav-item pgbankdetail">
                    <Link to="/bank-detail" className="nav-link">
                      Bank Details
                    </Link>
                  </li>
                  <li class="nav-item pgmarkettrendz">
                    <Link to="/market" className="nav-link">
                      Market Trendz
                    </Link>
                  </li>
                  <li class="nav-item pgecocalender">
                    <Link to="/economic-calendar" className="nav-link">
                      Economic Calendar
                    </Link>
                  </li>
                  <li class="nav-item pgcontact">
                    <Link to="/contact" className="nav-link">
                      Contact Us
                    </Link>
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
