import React from "react";
import { Link } from "react-router-dom";
function Universe() {
  return (
    <div className="container  mt-5">
      <div className="row text-center mb-5">
        <h2 className="fw-bold mt-5 text-muted fs-4">The Zerodha Universe </h2>
        <p className=" mt-2 text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-12 col-md-4 p-3 mt-4">
          <img src="media/images/smallcaseLogo.png" alt="smallcase" style={{ width: "150px" }} className="mb-3"></img>
          <p className="text-muted small">
            Thematic investing platform
            that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-12 col-md-4 p-3 mt-4">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "60%" }}
            alt="pic"
            className="mb-3"
          ></img>
          <p className="text-muted small">
            Our asset management venture
            that is creating simple and transparent index
            funds to help you save for your goals.
          </p>
        </div>
        <div className="col-12 col-md-4 p-3 mt-4">
          <img src="media/images/dittoLogo.png" style={{ width: "40%" }} alt="pic" className="mb-3"></img>
          <p className="text-muted small">
            Personalized advice on life
            and health insurance. No spam
            and no mis-selling.
          </p>
        </div>
        <div className="col-12 col-md-4 p-3 mt-4">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "65%" }}
            alt="pic"
            className="mb-3"
          ></img>
          <p className="text-muted small">
            Options trading platform that lets you
            create strategies, analyze positions, and examine
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-12 col-md-4 p-3 mt-4">
          <img src="media/images/streakLogo.png" style={{ width: "50%" }} alt="pic" className="mb-3"></img>
          <p className="text-muted small">
            Thematic investing platform
            that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-12 col-md-4 p-3 mt-4">
          <img src="media/images/dittoLogo.png" style={{ width: "40%" }} alt="pic" className="mb-3"></img>
          <p className="text-muted small">
            Personalized advice on life
            and no mis-selling.
          </p>
        </div>
        <form className="col-12 mt-5">
          <Link className="btn btn-primary px-5 py-2 fs-5 fw-medium" to="/signup">
            Sign up for free
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Universe;
