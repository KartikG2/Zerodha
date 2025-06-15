import React from "react";
import {Link} from "react-router-dom";
function NotFound() {
  return (
    <div className="text-center p-5 mt-5">
        <h3 className="mb-3">404</h3>
      <h2 className="mb-3">Page Not Found</h2>
      <p className="mb-3">
        We couldn’t find the page you were looking for. Visit <Link to="/">Zerodha’s home page</Link>
      </p>
    </div>
  );
}

export default NotFound;
