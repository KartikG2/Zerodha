import React from "react";
import "../home/Hero.css";

function CreateTicket() {
  return (
    <div className="container py-5">
      <h2 className="text-muted fs-4 fw-normal">
        To create a ticket, select a relevant topic
      </h2>
      <div className="row tickets mt-4">
        <div className="col-4">
          <h2 className="Suport-sub-heading my-4">
            <a href="/account" className="Suport-sub-heading">
              <i className="fa-solid fa-circle-plus"></i>&nbsp; Account Opening
            </a>
          </h2>
          <span>
            <a href="/resident" className="support-links">
              Resident individual
            </a>
          </span>
          <br />
          <span>
            <a href="/minor" className="support-links">
              Minor
            </a>
          </span>
          <br />
          <span>
            <a href="/nri" className="support-links">
              Non Resident Indian (NRI)
            </a>
          </span>
          <br />
          <span>
            <a href="/company" className="support-links">
              Company, Partnership, HUF and LLP
            </a>
          </span>
          <br />
          <span>
            <a href="/glossary" className="support-links">
              Glossary
            </a>
          </span>
          <br />
        </div>
        <div className="col-4">
          <h2 className="Suport-sub-heading my-4">
            <a href="/" className="Suport-sub-heading">
              <i className="fa-regular fa-user"></i>&nbsp; Your Zerodha Account
            </a>
          </h2>
          <span>
            <a href="/login" className="support-links">
              Login credentials
            </a>
          </span>
          <br />
          <span>
            <a href="/profile" className="support-links">
              Your Profile
            </a>
          </span>
          <br />
          <span>
            <a href="/modification" className="support-links">
              Account modification and segment addition
            </a>
          </span>
          <br />
          <span>
            <a href="/cmr" className="support-links">
              CMR & DP ID
            </a>
          </span>
          <br />
          <span>
            <a href="/nomination" className="support-links">
              Nomination
            </a>
          </span>
          <br />
          <span>
            <a href="/shares" className="support-links">
              Transfer and conversion of shares
            </a>
          </span>
          <br />
        </div>
        <div className="col-4">
          <h2 className="Suport-sub-heading my-4">
            <a href="/trading" className="Suport-sub-heading">
              <i className="fa-solid fa-chart-line"></i>&nbsp; Trading and Markets
            </a>
          </h2>
          <span>
            <a href="/faq" className="support-links">
              Trading FAQs
            </a>
          </span>
          <br />
          <span>
            <a href="/kite" className="support-links">
              Kite
            </a>
          </span>
          <br />
          <span>
            <a href="/margins" className="support-links">
              Margins
            </a>
          </span>
          <br />
          <span>
            <a href="/types" className="support-links">
              Product and order types
            </a>
          </span>
          <br />
          <span>
            <a href="/actions" className="support-links">
              Corporate actions
            </a>
          </span>
          <br />
          <span>
            <a href="/features" className="support-links">
              Kite features
            </a>
          </span>
          <br />
        </div>
        <div className="col-4 mt-4">
          <h2 className="Suport-sub-heading my-4">
            <a href="/funds" className="Suport-sub-heading">
              <i className="fa-solid fa-wallet"></i>&nbsp;  Funds
            </a>
          </h2>
          <span>
            <a href="/funds" className="support-links">
            Fund withdrawal
            </a>
          </span>
          <br />
          <span>
            <a href="/funds" className="support-links">
            Adding funds
            </a>
          </span>
          <br />
          <span>
            <a href="/funds" className="support-links">
            Adding bank accounts
            </a>
          </span>
          <br />
          <span>
            <a href="/funds" className="support-links">
            eMandates
            </a>
          </span>
          <br />
        </div>
        <div className="col-4 mt-4">
          <h2 className="Suport-sub-heading my-4">
            <a href="/funds" className="Suport-sub-heading">
            <i className="fa-brands fa-gg-circle"></i>&nbsp; Console
            </a>
          </h2>
          <span>
            <a href="/ipo" className="support-links">
            IPO
            </a>
          </span>
          <br />
          <span>
            <a href="/Portfolio" className="support-links">
            Portfolio
            </a>
          </span>
          <br />
          <span>
            <a href="/Portfolio" className="support-links">
            Funds statement
            </a>
          </span>
          <br />
          <span>
            <a href="/profile" className="support-links">
            Profile
            </a>
          </span>
          <br />
          <span>
            <a href="/reports" className="support-links">
            Reports
            </a>
          </span>
          <br />
          <span>
            <a href="/referal" className="support-links">
            Referral program
            </a>
          </span>
          <br />
        </div>
        <div className="col-4 mt-4">
          <h2 className="Suport-sub-heading my-4">
            <a href="/coin" className="Suport-sub-heading">
            <i className="fa-solid fa-circle-notch"></i>&nbsp; Coin
            </a>
          </h2>
          <span>
            <a href="/coin" className="support-links">        
            Understanding mutual funds and Coin
            </a>
          </span>
          <br />
          <span>
            <a href="/coin" className="support-links">
            Coin app
            </a>
          </span>
          <br />
          <span>
            <a href="/coin" className="support-links">
            Coin web
            </a>
          </span>
          <br />
          <span>
            <a href="/coin" className="support-links">
            Transactions and reports
            </a>
          </span>
          <br />
          <span>
            <a href="/coin" className="support-links">
            National Pension Scheme (NPS)
            </a>
          </span>
          <br />
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
