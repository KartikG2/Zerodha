import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      
      <div className="row align-items-center">
        <div className="col-12 col-md-7 p-3 p-md-5">
          <img src={imageURL} alt={productName} className="img-fluid"/>
        </div>
        <div className="col-12 col-md-5 p-3 p-md-5">
          <h2 className="mb-4 fw-bold text-dark">{productName}</h2>
          <p className="text-muted lh-lg">{productDesription}</p>

          <div className="mb-4">
            {tryDemo && (
                <a href={tryDemo} className="text-decoration-none">
                    Try Demo <i className="fa-solid fa-arrow-right"></i>
                </a>
            )}
            {learnMore && (
                <a href={learnMore} className="text-decoration-none ms-4">
                    Learn More <i className="fa-solid fa-arrow-right"></i>
                </a>
            )}
          </div>
          
          <div className="d-flex gap-3">
            {googlePlay && (
                <a href={googlePlay}>
                <img src="media/images/googlePlayBadge.svg" alt="Google Play" style={{height:"40px"}}/>
                </a>
            )}
            {appStore && (
                <a href={appStore}>
                <img src="media/images/appstoreBadge.svg" alt="App Store" style={{height:"40px"}}/>
                </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;