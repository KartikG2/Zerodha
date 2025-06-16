import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      
      <div className="row">
      <div className="col-5 p-5 mt-5">
          <h2>{productName}</h2>
          <p>{productDesription}</p>
          <div>
            <a href={learnMore}>
              Learn More <i className="fa-solid fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-7 p-5">
          <img src={imageURL} alt=""/>
        </div>
        
      </div>
    </div>
  );
}

export default RightSection;