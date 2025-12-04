import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        <div className="col-12 col-md-5 p-3 p-md-5 order-2 order-md-1">
          <h2 className="mb-4 fw-bold text-dark">{productName}</h2>
          <p className="text-muted lh-lg">{productDesription}</p>
          <div className="mb-4">
            <a href={learnMore} className="text-decoration-none">
              Learn More <i className="fa-solid fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
      
        <div className="col-12 col-md-7 p-3 p-md-5 order-1 order-md-2">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>

      </div>
    </div>
  );
}

export default RightSection;