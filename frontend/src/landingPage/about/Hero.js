import React from "react";

function Hero() {
  return (
    <div className="container border-bottom section-padding fade-in-up">
      <div className="row py-5 mb-4 text-center">
        <div className="col-12">
          <h1 className="hero-heading fs-2">
            We pioneered the discount broking model in India.
            <br className="d-none d-md-block" />{" "}
            <span className="text-muted">
              Now, we are breaking ground with our technology.
            </span>
          </h1>
        </div>
      </div>

      <div className="row px-3 px-md-5 mb-5">
        {/* Left Column */}
        <div className="col-12 col-md-6 mb-4 mb-md-0 px-md-4">
          <p className="lh-lg text-secondary">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            <strong> Zerodha</strong>, a combination of Zero and "Rodha", the
            Sanskrit word for barrier.
          </p>
          <p className="lh-lg text-secondary">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p className="lh-lg text-secondary">
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>

        {/* Right Column */}
        <div className="col-12 col-md-6 px-md-4">
          <p className="lh-lg text-secondary">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p className="lh-lg text-secondary">
            <a href="/Rainmatter">Rainmatter</a>, our fintech fund and
            incubator, has invested in several fintech startups with the goal of
            growing the Indian capital markets.
          </p>
          <p className="lh-lg text-secondary">
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our <a href="/blog">blog</a> or see what the
            media is <a href="/about"> saying about us.</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;