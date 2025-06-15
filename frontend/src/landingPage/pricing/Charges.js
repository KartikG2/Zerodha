import React from "react";
import '../home/Hero.css';
function Charges() {
  return (
    <div className="container p-5 mb-5 ">
      <h2>Charges for account opening</h2>
      <table className="table table-striped border my-4 pb-5 table-responsive">
        <thead >
          <tr>
            <th scope="col" className="fw-medium ps-3">Type of account</th>
            <th scope="col" className="fw-medium">Charges</th>
          </tr>
        </thead>
        <tbody >
          <tr>
            <td>Online account</td>
            <td><span className="badge text-bg-success rounded px-2">Free</span></td>
          </tr>
          <tr>
            <td>Offline account</td>
            <td><span className="badge text-bg-success">Free</span></td>
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

      <div className="mini-container mt-5 pt-5">
      <h2>Charges for optional value added services</h2>
      <table className="table table-striped border mt-4 table-responsive font-muted">
        <thead >
          <tr>
            <th scope="col" className="fw-medium ps-3">Services</th>
            <th scope="col" className="fw-medium ">Billing Frquency</th>
            <th scope="col" className="fw-medium">Charges</th>
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
  );
}

export default Charges;
