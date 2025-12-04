import React from "react";
import "../home/Hero.css";

function CreateTicket() {
  return (
    <div className="container py-5">
      <h2 className="text-muted fw-normal mb-5 ms-3">
        To create a ticket, select a relevant topic
      </h2>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 mb-5 p-4">
          <h5 className="support-category-heading mb-3">
            <a href="/account" className="Suport-sub-heading">
              <i className="fa-solid fa-circle-plus"></i>&nbsp; Account Opening
            </a>
          </h5>
          <div>
            <a href="/resident" className="support-list-link">Resident individual</a>
            <a href="/minor" className="support-list-link">Minor</a>
            <a href="/nri" className="support-list-link">Non Resident Indian (NRI)</a>
            <a href="/company" className="support-list-link">Company, Partnership and HUF</a>
            <a href="/glossary" className="support-list-link">Glossary</a>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4 mb-5 p-4">
          <h5 className="support-category-heading mb-3">
            <a href="/" className="support-sub-heading">
              <i className="fa-regular fa-user"></i>&nbsp; Your Zerodha Account
            </a>
          </h5>
          <div>
            <a href="/login" className="support-list-link">Login credentials</a>
            <a href="/profile" className="support-list-link">Your Profile</a>
            <a href="/modification" className="support-list-link">Account modification</a>
            <a href="/cmr" className="support-list-link">CMR & DP ID</a>
            <a href="/nomination" className="support-list-link">Nomination</a>
            <a href="/transfer" className="support-list-link">Transfer and conversion of shares</a>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4 mb-5 p-4">
          <h5 className="support-category-heading mb-3">
            <a href="/trading" className="support-sub-heading">
              <i className="fa-solid fa-chart-line"></i>&nbsp; Trading and Markets
            </a>
          </h5>
          <div>
            <a href="/faq" className="support-list-link">Trading FAQs</a>
            <a href="/kite" className="support-list-link">Kite</a>
            <a href="/margins" className="support-list-link">Margins</a>
            <a href="/products" className="support-list-link">Product and order types</a>
            <a href="/corporate" className="support-list-link">Corporate actions</a>
            <a href="/kite-features" className="support-list-link">Kite features</a>
          </div>

        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-5 p-4">
          <h5 className="support-category-heading mb-3">
            <a href="/funds" className="fa-solid fa-wallet">
              <i className="fa-solid fa-wallet"></i>&nbsp;  Funds
            </a>
          </h5>
         <div>
            <a href="/withdrawal" className="support-list-link">Fund withdrawal</a>
            <a href="/adding" className="support-list-link">Adding funds</a>
            <a href="/bank" className="support-list-link">Adding bank accounts</a>
            <a href="/emandate" className="support-list-link">eMandates</a>
          </div>
          <br />
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-5 p-4">
          <h5 className="support-category-heading mb-3">
            <a href="/funds" className="support-sub-heading">
            <i className="fa-brands fa-gg-circle"></i>&nbsp; Console
            </a>
          </h5>
          <div>
            <a href="/ipo" className="support-list-link">IPO</a>
            <a href="/portfolio" className="support-list-link">Portfolio</a>
            <a href="/statement" className="support-list-link">Funds statement</a>
            <a href="/profile" className="support-list-link">Profile</a>
            <a href="/reports" className="support-list-link">Reports</a>
            <a href="/referral" className="support-list-link">Referral program</a>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-5 p-4">
          <h5 className="support-category-heading mb-3">
            <a href="/coin" className="support-sub-heading">
            <i className="fa-solid fa-circle-notch"></i>&nbsp; Coin
            </a>
          </h5>
          <div>
            <a href="/mutual-funds" className="support-list-link">Understanding mutual funds</a>
            <a href="/coin-app" className="support-list-link">Coin app</a>
            <a href="/coin-web" className="support-list-link">Coin web</a>
            <a href="/transactions" className="support-list-link">Transactions and reports</a>
            <a href="/nps" className="support-list-link">National Pension Scheme (NPS)</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
