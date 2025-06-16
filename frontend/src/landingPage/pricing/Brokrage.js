import React from "react";
function Brokrage() {
  return (
    <div className="container p-5">
      <div className="row text-center p-5 border-top">
        <div className="col-8 ">
          <a href="/calculator">
            <h3 className="fs-5 mb-5">Brokrage Calculator</h3>
          </a>
          <ul className=" brokrage text-muted">
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
        <div className="col-4">
          <a href="/charges">
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokrage;
