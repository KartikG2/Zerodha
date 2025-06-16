import React from "react";
function Universe() {
  return (
    <div className="container p-5 mt-5">
      <div className="row text-center">
        <h2 className="heading mt-5">The Zerodha Universe </h2>
        <p className=" mt-2 mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4">
          <img src="media/images/smallcaseLogo.png" alt="smallcase"></img>
          <p className="sm-paragraphs mt-3">
            Thematic investing platform
            <br />
            that helps you invest in diversified
            <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "60%" }}
            alt="pic"
          ></img>
          <p className="sm-paragraphs mt-3">
            Our asset management venture
            <br />
            that is creating simple and transparent index
            <br />
            funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/dittoLogo.png" style={{ width: "40%" }} alt="pic" ></img>
          <p className="sm-paragraphs mt-3">
            Personalized advice on life
            <br />
            and health insurance. No spam
            <br />
            and no mis-selling.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "65%" }}
            alt="pic"
          ></img>
          <p className="sm-paragraphs mt-3">
            Options trading platform that lets you
            <br />
            create strategies, analyze positions, and examine
            <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img src="media/images/streakLogo.png" style={{ width: "50%" }} alt="pic"></img>
          <p className="sm-paragraphs mt-3">
            Thematic investing platform
            <br />
            that helps you invest in diversified
            <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img src="media/images/dittoLogo.png" style={{ width: "40%" }} alt="pic"></img>
          <p className="sm-paragraphs mt-3">
            Personalized advice on life
            <br />
            and health insurance. No spam
            <br />
            and no mis-selling.
          </p>
        </div>
        <form className="my-3">
          <a className="signupBtn btn btn-primary m-5 px-5 py-2" href="/signup">
            Sign up for free
          </a>
        </form>
      </div>
    </div>
  );
}

export default Universe;
