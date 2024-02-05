import './Footer.css'

const Footer = () => {
  return (
    <div>
      <div id="ftr">
        <footer>
          <div class="container">
            <div className="biglineBeforeFooter"></div>
            <div class="footer-top">
              <div class="row">
                <div class="col-xl-3 col-lg-3 col-md-12">
                  <a
                    class="logo-wrapper"
                    href="https://bullion.safegold.in/index.html"
                  >
                    <img src="public/logo.svg" alt="" />
                  </a>
                  <p class="txt">
                    SafeGold offers 24K Gold and Silver minted products in
                    multiple denominations and designs. SafeGold is an organised
                    and transparent method of buying and accumulating 24K
                    physical gold in compliance with all applicable laws and
                    regulations.
                  </p>
                  <div class="social-media order-lg-last">
                    <p class="mb-0 d-flex">
                      <a
                        href="https://bullion.safegold.in/index.html#"
                        class="d-flex align-items-center justify-content-center"
                      >
                        <span class="fa fa-facebook">
                          <i class="sr-only">Facebook</i>
                        </span>
                      </a>
                      <a
                        href="https://bullion.safegold.in/index.html#"
                        class="d-flex align-items-center justify-content-center"
                      >
                        <span class="fa fa-twitter">
                          <i class="sr-only">Twitter</i>
                        </span>
                      </a>
                      <a
                        href="https://bullion.safegold.in/index.html#"
                        class="d-flex align-items-center justify-content-center"
                      >
                        <span class="fa fa-instagram">
                          <i class="sr-only">Instagram</i>
                        </span>
                      </a>
                      <a
                        href="https://bullion.safegold.in/index.html#"
                        class="d-flex align-items-center justify-content-center"
                      >
                        <span class="fa fa-linkedin">
                          <i class="sr-only">Dribbble</i>
                        </span>
                      </a>
                      <a
                        href="https://bullion.safegold.in/index.html#"
                        class="d-flex align-items-center justify-content-center"
                      >
                        <span class="fa fa-android">
                          <i class="sr-only">Android</i>
                        </span>
                      </a>
                      <a
                        href="https://apps.apple.com/us/app/safegold-for-business/id1584753078"
                        target="_blank"
                        class="d-flex align-items-center justify-content-center"
                      >
                        <span class="fa fa-apple">
                          <i class="sr-only">Ios</i>
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
                <div class="col-xl-2 offset-xl-1 col-lg-2 col-md-3">
                  <h4>Useful Links</h4>
                  <ul class="links">
                    <li>
                      <a href="https://bullion.safegold.in/about.html">
                        <i class="fa fa-angle-right"></i>About Us
                      </a>
                    </li>
                  </ul>
                  <div class="bank-logo">
                    <ul>
                      <li>
                        <img src="/brinks.svg" />
                      </li>
                      {/* <!-- <li><img src="images/idbi.svg"/></li> --> */}
                    </ul>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-3">
                  <h4>Services</h4>
                  <ul class="links">
                    <li>
                      <a href="https://bullion.safegold.in/disclaimer.html">
                        <i class="fa fa-angle-right"></i>Disclaimer
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6">
                  <h4>Contact Us</h4>
                  <div class="contact-infos">
                    <div class="single-info">
                      <div class="icon-wrapper">
                        <i class="fa fa-street-view" aria-hidden="true"></i>
                      </div>
                      <p class="address1"></p>
                    </div>
                    <div class="single-info">
                      <div class="icon-wrapper">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                      </div>
                      <p class="bookingno1">+91 84484 40373</p>
                    </div>
                    <div class="single-info">
                      <div class="icon-wrapper">
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                      </div>
                      <p class="email1"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer-bottom">
              <p>© Copyrights 2021 SAFEGOLD. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
