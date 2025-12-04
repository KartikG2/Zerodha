import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#fbfbfb" }} className="border-top mt-5">
      <div className="container mt-5">
        <div className="row mt-5">
          
          {/* ======================= Column 1: Logo & Social ======================= */}
          <div className="col-12 col-sm-6 col-lg-3 mb-4">
            <div className="mb-3">
              <img
                src="media/images/logo.svg"
                alt="Logo"
                style={{ width: "50%" }}
                className="mb-3"
              />
            </div>
            <p className="text-muted" style={{ fontSize: "0.9rem" }}>
              &copy; 2010 - 2025, Zerodha Broking Ltd.<br />
              All rights reserved.
            </p>

            <ul className="list-unstyled d-flex gap-3 mt-4">
              <li>
                <a href="https://twitter.com" className="text-muted fs-5 hover-blue">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://facebook.com" className="text-muted fs-5 hover-blue">
                  <i className="fa-brands fa-square-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="text-muted fs-5 hover-blue">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" className="text-muted fs-5 hover-blue">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul>
            <hr />
            <ul className="list-unstyled d-flex gap-3">
              <li>
                <a href="https://youtube.com" className="text-muted fs-5 hover-blue">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="https://whatsapp.com" className="text-muted fs-5 hover-blue">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </li>
              <li>
                <a href="https://telegram.com" className="text-muted fs-5 hover-blue">
                  <i className="fa-brands fa-telegram"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* ======================= Column 2: Company ======================= */}
          <div className="col-12 col-sm-6 col-lg-3 mb-4">
            <h5 className="mb-3 fw-medium text-dark">Company</h5>
            <ul className="list-unstyled lh-lg">
              <li><a href="/about" className="text-muted text-decoration-none">About</a></li>
              <li><a href="/products" className="text-muted text-decoration-none">Products</a></li>
              <li><a href="/pricing" className="text-muted text-decoration-none">Pricing</a></li>
              <li><a href="/referral" className="text-muted text-decoration-none">Referral programme</a></li>
              <li><a href="/careers" className="text-muted text-decoration-none">Careers</a></li>
              <li><a href="/tech" className="text-muted text-decoration-none">Zerodha.tech</a></li>
              <li><a href="/press" className="text-muted text-decoration-none">Press & media</a></li>
              <li><a href="/cares" className="text-muted text-decoration-none">Zerodha Cares (CSR)</a></li>
            </ul>
          </div>

          {/* ======================= Column 3: Support ======================= */}
          <div className="col-12 col-sm-6 col-lg-3 mb-4">
            <h5 className="mb-3 fw-medium text-dark">Support</h5>
            <ul className="list-unstyled lh-lg">
              <li><a href="/contact" className="text-muted text-decoration-none">Contact us</a></li>
              <li><a href="/support" className="text-muted text-decoration-none">Support portal</a></li>
              <li><a href="/z-connect" className="text-muted text-decoration-none">Z-Connect blog</a></li>
              <li><a href="/charges" className="text-muted text-decoration-none">List of charges</a></li>
              <li><a href="/downloads" className="text-muted text-decoration-none">Downloads & resources</a></li>
              <li><a href="/videos" className="text-muted text-decoration-none">Videos</a></li>
              <li><a href="/market-overview" className="text-muted text-decoration-none">Market overview</a></li>
              <li><a href="/tickets" className="text-muted text-decoration-none">How to file a complaint?</a></li>
              <li><a href="/complaints" className="text-muted text-decoration-none">Status of your complaints</a></li>
            </ul>
          </div>

          {/* ======================= Column 4: Account ======================= */}
          <div className="col-12 col-sm-6 col-lg-3 mb-4">
            <h5 className="mb-3 fw-medium text-dark">Account</h5>
            <ul className="list-unstyled lh-lg">
              <li><a href="/open-account" className="text-muted text-decoration-none">Open an account</a></li>
              <li><a href="/fund-transfer" className="text-muted text-decoration-none">Fund transfer</a></li>
            </ul>
          </div>
        </div>

        {/* ======================= Disclaimer Text ======================= */}
        <div className="row mt-5">
          <div className="col-12 text-muted" style={{ fontSize: "0.75rem", lineHeight: "1.6" }}>
            <p>
              Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
              no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
              Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
              Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
              – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
              Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
              Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
              India. For any complaints pertaining to securities broking please
              write to <a href="mailto:complaints@zerodha.com" className="text-primary">complaints@zerodha.com</a>, for DP related to <a href="mailto:dp@zerodha.com" className="text-primary">dp@zerodha.com</a>.
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
              <a href="/odr" className="text-primary">Smart Online Dispute Resolution</a> | <a href="/redressal" className="text-primary">Grievances Redressal Mechanism</a>
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
        </div>

        {/* ======================= Bottom Links ======================= */}
        <div className="row mt-4 pb-5 text-center">
            <div className="col-12">
                <ul className="d-flex justify-content-center gap-3 flex-wrap list-unstyled" style={{ fontSize: "0.85rem" }}>
                    <li><a href="/nse" className="text-muted text-decoration-none">NSE</a></li>
                    <li><a href="/bse" className="text-muted text-decoration-none">BSE</a></li>
                    <li><a href="/mcx" className="text-muted text-decoration-none">MCX</a></li>
                    <li><a href="/terms" className="text-muted text-decoration-none">Terms & conditions</a></li>
                    <li><a href="/policies" className="text-muted text-decoration-none">Policies & procedures</a></li>
                    <li><a href="/privacy" className="text-muted text-decoration-none">Privacy policy</a></li>
                    <li><a href="/disclosure" className="text-muted text-decoration-none">Disclosure</a></li>
                    <li><a href="/investor" className="text-muted text-decoration-none">For investor's attention</a></li>
                    <li><a href="/charter" className="text-muted text-decoration-none">Investor charter</a></li>
                </ul>
            </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;