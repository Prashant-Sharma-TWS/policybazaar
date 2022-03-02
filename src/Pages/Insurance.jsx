import React from "react";
import { InsuranceCard } from "../Elements/Insurance";

export const Insurance = () => {
  return (
    <InsuranceCard>
      <div>
        <div>
          <img
            src="https://termlife.policybazaar.com/assets/images/akshayimg.png"
            alt="akshay"
          />
        </div>
        <div>
          <div>
            <h1>
              <b>1 Crore</b> life cover at <b>₹490/month+</b>
            </h1>
            <h2>Get insured from the comfort of your home</h2>
            <h3>
              <li>No Medical Tests Required+</li>
              <li>COVID - 19 covered</li>
            </h3>
          </div>
          <div className="form-input">
            {/* <div><input type="text" /></div> */}
            <div>
              <label>Full Name</label>
              <input type="text" placeholder="Enter Your Full Name" />
            </div>
            <div>
              <label>Date of Birth</label>
              <input type="text" placeholder="DD/MM/YYYY" />
            </div>
            <div>
              <label>Mobile Number</label>
              <input type="text" placeholder="Mobile Number" />
            </div>
          <button>View Free Quotes</button>
          </div>
        </div>
      </div>
    </InsuranceCard>
  );
};
