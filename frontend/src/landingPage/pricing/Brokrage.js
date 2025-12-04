import React from "react";
function Brokrage() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row p-5 border-top">
        <div className="col-12 col-md-8 p-4 ">
          <a href="/calculator">
            <h3 className="fs-5 mb-5">Brokrage Calculator</h3>
          </a>
          <ul className=" text-muted" style={{textAlign: "left", fontSize:"0.9rem", lineHeight:"2.5"}}>
            <li>
              Call & Trade and RMS auto-squareott. Additional charges of ₹50 GST
              per order{" "}
            </li>
            <li>Digital contract notes will be sent via e-mail. </li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              20 per contract note. Courier charges apply.{" "}
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or 100 per executed order for
              equity (whichever is lower).{" "}
            </li>
            <li>
              For NRI account (PIS), 0.5% or #200 per executed order for equity
              (whichever is lower){" "}
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged 240 per executed order instead of 220 per executed order.{" "}
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-4 p-4 text-center text-md-start">
          <h3 className="fs-5 mb-4">List of charges</h3>
          <a href="/charges" style={{textDecoration:"none"}}>
             Calculate your costs upfront <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokrage;
