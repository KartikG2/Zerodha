import React from "react";
import '../home/Hero.css';
function Charges() {
  return (
    <div className="container p-4 p-md-5 mb-5">
      <h3 className="mb-4 mt-5 fs-4 text-muted">Charges for account opening</h3>

      <div className="table-responsive">
      <table className="table table-hover table-striped border">
        <thead >
          <tr>
            <th scope="col" className="fw-medium ps-3 text-muted">Type of account</th>
            <th scope="col" className="fw-medium text-muted">Charges</th>
          </tr>
        </thead>
        <tbody >
          <tr>
            <td>Online account</td>
            <td><span className="badge bg-success rounded-pill px-2">Free</span></td>
          </tr>
          <tr>
            <td>Offline account</td>
            <td><span className="badge bg-success rounded-pill px-2">Free</span></td>
          </tr>
          <tr>
            <td>NRI account (offline only)</td>
            <td>₹ 500</td>
          </tr>
          <tr>
            <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
            <td>₹ 500</td>
          </tr>
        </tbody>
      </table>
      </div>

      <div className="mini-container mt-5 pt-5">
      <h3 className="mb-4 mt-5 fs-4 text-muted">Charges for optional value added services</h3>
      
      <div className="table-responsive">
      <table className="table table-hover table-striped border">
        <thead >
          <tr>
            <th scope="col" className="fw-medium ps-3 text-muted">Services</th>
            <th scope="col" className="fw-medium text-muted">Billing Frquency</th>
            <th scope="col" className="fw-medium text-muted">Charges</th>
          </tr>
        </thead>
        <tbody >
          <tr>
            <td>Tickertape</td>
            <td>Monthly / Annual</td>
            <td>Free: 0 | Pro: 249/2399</td>
          </tr>
          <tr>
            <td>Smallcase</td>
            <td>Per transaction</td>
            <td>Buy & Invest More: 100 | SIP: 10</td>
          </tr>
          <tr>
            <td>Kite Connect</td>
            <td>Monthly</td>
            <td>Connect: 2000 | Historical: 2000</td>
          </tr>
        </tbody>
      </table>
      </div>
      </div>
    </div>
  );
}

export default Charges;
