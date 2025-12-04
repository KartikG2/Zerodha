import React from "react";
function Hero() {
  return (
    <div className="container ">
      <div className="row text-center mt-5 border-bottom pb-5">
        <h1 className="heading animate-up">Charges</h1>
        <p className="paragraph mt-2 animate-up" style={{animationDelay: "0.2s"}}>List of all charges and taxes</p>
      </div>

      <div className="row mt-5 text-center">
        <div className="col-12 col-md-4 p-4 animate-up" style={{animationDelay: "0.3s"}}>
          <img src="media/images/pricing0.svg" alt="Free equity delivery" style={{ width: "70%" }} />
          <h2 className="fs-3 mt-4">Free equity delivery</h2>
          <p className="subInfo text-muted mt-3 ">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-12 col-md-4 p-4 animate-up" style={{animationDelay: "0.4s"}}>
          <img src="media/images/other-trades.svg" alt="Intraday and F&O trades" style={{ width: "70%" }} />
          <h2 className="fs-3 mt-4">Intraday and F&O trades</h2>
          <p className="subInfo text-muted mt-3">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-12 col-md-4 p-4 animate-up" style={{animationDelay: "0.5s"}}>
          <img src="media/images/pricingEquity.svg" alt="Free direct MF" style={{ width: "70%" }} />
          <h2 className="fs-3 mt-4">Free direct MF</h2>
          <p className="subInfo text-muted mt-3">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
