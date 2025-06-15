import React from "react";
function Hero() {
  return (
    <div className="container p-5 ">
      <div className="row text-center mb-5">
        <h1 className="heading mt-5">Charges</h1>
        <p className="paragraph mt-2">List of all charges and taxes</p>
      </div>

      <div className="row mt-5">
        <div className="col-4 text-center mt-5">
          <img src="media/images/pricing0.svg" style={{ width: "70%" }} />
          <h2 className="mt-3 ">Free equity delivery</h2>
          <p className="subInfo ">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 text-center mt-5">
          <img src="media/images/other-trades.svg" style={{ width: "70%" }} />
          <h2 className="mt-3">Intraday and F&O trades</h2>
          <p className="subInfo">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 text-center mt-5">
          <img src="media/images/pricingEquity.svg" style={{ width: "70%" }} />
          <h2 className="mt-3">Free direct MF</h2>
          <p className="subInfo ">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
