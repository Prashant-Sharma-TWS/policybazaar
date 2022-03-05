import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { InsuranceCard } from "../Elements/Insurance";
import { BsArrowDownLeft } from "react-icons/bs";

const initialUser = {
  male: "",
  female: "",
  name: "",
  dob: "",
  mobileNumber: "",
};

export const Insurance = () => {
  const [user, setUser] = useState(initialUser);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (user.female === "on" && name === "male") {
      console.log("female");
      setUser({ ...user, [user.female]: "", [name]: value });
      return;
    }
    if (user.male === "on" && name === "female") {
      console.log("male");
      setUser({ ...user, [user.male]: "", [name]: value });
      return;
    }
    setUser({ ...user, [name]: value });
  };

  const handleQuote = () => (navigate(`${pathname}/quotes`));

  return (
    <InsuranceCard>
      <div className="insurance-div">
        <div className="first-div-insurance">
          <img
            src="https://termlife.policybazaar.com/assets/images/akshayimg.png"
            alt="akshay"
          />
        </div>
        <div className="second-div-insurance">
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
            <div>
              <div className="male" onClick={handleChange}>
                Male
                <input type="radio" name="male" onChange={handleChange} />
              </div>
              <div className="female" onClick={handleChange}>
                Female
                <input type="radio" name="female" onChange={handleChange} />
              </div>
            </div>
            <div>
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter Your Full Name"
                name="name"
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Date of Birth</label>
              <input
                type="text"
                placeholder="DD/MM/YYYY"
                name="dob"
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Mobile Number</label>
              <input
                type="text"
                placeholder="Mobile Number"
                name="mobileNumber"
                onChange={handleChange}
              />
            </div>
            <button onClick={handleQuote}>
              View Free Quotes
              <BsArrowDownLeft className="right-arrow" />
            </button>
            <p>
              <img
                src="https://termlife.policybazaar.com/assets/images/lock.svg"
                alt="lock"
              />
              Your personal information is secure with us
            </p>
          </div>
        </div>
      </div>
    </InsuranceCard>
  );
};
