import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p><br></br>
        <Link className="btn btn-green">Add funds</Link>
        <Link className="btn btn-blue">Withdraw</Link>
      </div>

      <div className=" fundsRow">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="Fundsdata">
              <p>Available margin</p>
              <p className="imp colored">4,043.10</p>
            </div>
            <div className="Fundsdata">
              <p>Used margin</p>
              <p className="imp">3,757.30</p>
            </div>
            <div className="Fundsdata">
              <p>Available cash</p>
              <p className="imp">4,043.10</p>
            </div>
            <hr />
            <div className="Fundsdata">
              <p>Opening Balance</p>
              <p>4,043.10</p>
            </div>
            <div className="Fundsdata">
              <p>Opening Balance</p>
              <p>3736.40</p>
            </div>
            <div className="Fundsdata">
              <p>Payin</p>
              <p>4064.00</p>
            </div>
            <div className="Fundsdata">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="Fundsdata">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="Fundsdata">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="Fundsdata">
              <p>Options premium</p>
              <p>0.00</p>
            </div>
            <hr />
            <div className="Fundsdata">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="Fundsdata">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="Fundsdata">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link className="btn btn-blue" to={"/signup"}>Open Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;