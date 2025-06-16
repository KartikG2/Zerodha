import React from "react";
import "./home/Hero.css";
function Footer() {
  return (
    <div className="footer border-top" style={{ backgroundColor: "#fbfbfb" }}>
      <div className="container mt-5">
        <div className="row">
          {/* =----------------------- First column -------------------------------- */}
          <div className="col-3">
            <div>
              <img
                src="media/images/logo.svg"
                alt="Logo"
                style={{ width: "55%" }}
                className="mb-3 py-2"
              ></img>
            </div>
            <p style={{ fontSize: ".9rem" }}>
              &copy; 2010 - 2025, Zerodha Broking Ltd.<br></br>All rights
              reserved.
            </p>
            {/* ===================================socil links ============================== */}
            <ul
              style={{ listStyleType: "none", paddingLeft: "0px" }}
              className="d-flex"
            >
              <li className="socialIcons me-3">
                <a href="https://www.linkedin.com/in/kartikgangavati">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li className="socialIcons me-3">
                <a href="https://www.linkedin.com/in/kartikgangavati">
                  <i className="fa-brands fa-square-facebook"></i>
                </a>
              </li>
              <li className="socialIcons me-3">
                <a href="https://www.linkedin.com/in/kartikgangavati">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li className="socialIcons me-3">
                <a href="https://www.linkedin.com/in/kartikgangavati">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul>
            <hr></hr>
            <ul style={{ listStyleType: "none" }} className="d-flex p-0">
              <li className="socialIcons me-3">
                {" "}
                <a href="https://www.linkedin.com/in/kartikgangavati">
                  <i className="fa-brands fa-youtube"></i>{" "}
                </a>
              </li>
              <li className="socialIcons me-3">
                {" "}
                <a href="https://www.linkedin.com/in/kartikgangavati">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </li>
              <li className="socialIcons me-3">
                {" "}
                <a href="https://www.linkedin.com/in/kartikgangavati">
                  <i className="fa-brands fa-telegram"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* =----------------------- second column -------------------------------- */}
          <div className="col-3 links">
            <ul style={{ listStyleType: "none" }}>
              <li className="nav-head mb-2">Company</li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/Products">Products</a>
              </li>
              <li>
                <a href="/Pricing">Pricing</a>
              </li>
              <li>
                <a href="/rp">Referal programme</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/zt">zerodha tech</a>
              </li>
              <li>
                <a href="/os">open source</a>
              </li>
              <li>
                <a href="pm">Press & media</a>
              </li>
              <li>
                <a href="zc">Zerodha cares</a>
              </li>
            </ul>
          </div>

          {/* =----------------------- Third column -------------------------------- */}
          <div className="col-3 links">
            <ul style={{ listStyleType: "none" }}>
              <li className="nav-head mb-2">Support</li>
              <li>
                <a href="/contactus">Contact us</a>
              </li>
              <li>
                <a href="/support">Support portal</a>
              </li>
              <li>
                <a href="/blog">Z-Connect blog</a>
              </li>
              <li>
                <a href="loc">List of charges</a>
              </li>
              <li>
                <a href="downloads">Downloads & resources</a>
              </li>
              <li>
                <a href="/videos">Videos</a>
              </li>
              <li>
                <a href="/market">Market overview</a>
              </li>
              <li>
                <a href="/complain">How to file a complaint?</a>
              </li>
              <li>
                <a href="/status">Status of your complaints</a>
              </li>
            </ul>
          </div>
          <div className="col-3 links">
            <ul style={{ listStyleType: "none" }}>
              <li className="nav-head mb-2">Account</li>
              <li>
                <a href="/openaccount">Open an account</a>
              </li>
              <li>
                <a href="/funds">Fund transfer</a>
              </li>
            </ul>
          </div>
        </div>

        {/* =----------------------- Paragraphs section -------------------------------- */}
        <div className="row small-paragraphs mt-4 ">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1. Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2. Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3. Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
        <div className="footer-graveyard">
            <ul className=" d-flex extra-links justify-content-center flex-wrap" style={{ listStyleType: "none",paddingLeft:"0px" }}>
                <li><a href="/NSE">NSE</a></li>
                <li><a href="/BSE">BSE</a></li>
                <li><a href="/MCX">MCX</a></li>
                <li><a href="/Terms">Terms & conditions</a></li>
                <li><a href="/Policies">Policies & procedures</a></li>
                <li><a href="/Privacy">Privacy policy </a></li>
                <li><a href="/Disclosure">Disclosure </a></li>
                <li><a href="/investor">For investor's attention </a></li>
                <li><a href="/Privacy">Privacy policy </a></li>
                <li><a href="/Investor">Investor charter</a></li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
