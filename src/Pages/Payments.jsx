import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PaymentDiv } from "../Elements/Quotes";
import listOfInsuranceCompany from "../items.json";
import leftSideImg from "../Images/payments/payment-left-sidebar-image.png";
import { useSelector } from "react-redux";

export const Payments = () => {
  const [plan, setPlan] = useState();
  const params = useParams();
  const { data } = useSelector((state) => state.user);

  useEffect(() => {
    listOfInsuranceCompany.insurance.forEach((company) =>
      company.id === +params.id ? setPlan(company) : ""
    );
  }, [params]);

  return (
    <PaymentDiv>
      {plan ? (
        <div>
          <div className="payment-left-sidebar">
            <div>
              <img src={plan.image} alt="kotak" />
              <p>e-term Life</p>
            </div>
            <div>
              <div>
                <label>Life Cover</label>
                <select className="select-label">
                  <option value="1">1 Crore</option>
                </select>
              </div>
              <div>
                <label>Cover For</label>
                <select className="select-label">
                  <option value="1">{plan.till} Years</option>
                </select>
              </div>
              <div>
                <label>Pay For</label>
                <select className="select-label">
                  <option value="1">13 Years</option>
                </select>
              </div>
              <div>
                <label>Mode of Premium Payment</label>
                <select
                  className="select-label"
                  defaultValue={data.plan.amount < 5000 ? "Monthly" : "Yearly"}
                >
                  <option value="">Monthly</option>
                </select>
              </div>
              <div>
                <img src={leftSideImg} alt="convenience" />
              </div>
            </div>
          </div>
          <div className="payment-right-sidebar">
            <div>
              <p>Your Details</p>
              <p className="line-in-middle"></p>
              <p>Upgrade Your Plan</p>
              <p className="line-in-middle"></p>
              <p>Addon Riders</p>
            </div>
            <div>
              <label>Full Name as per your ID Proof</label>
              <input type="text" placeholder="Full Name" />
              <label>Email Address</label>
              <input type="text" placeholder="Email Address" />
              <label>Annual Income</label>
              <input type="text" placeholder="Annual Income" />
              <div>
                <label>Occupation</label>
                <select
                  className="select-label"
                  defaultValue={
                    data.card.occupation === "Salaried"
                      ? "Salaried"
                      : "Self Employed"
                  }
                >
                  <option value="Salaried">Salaried</option>
                  <option value="Self Employed">Self Employed</option>
                </select>
              </div>
              <div>
                <label>Education</label>
                <select className="select-label">
                  <option value="">Graduation &amp; above</option>
                  <option value="12th">12th</option>
                  <option value="10th">10th &amp; below</option>
                </select>
              </div>
            </div>
            <div>
              <p>
                Total Premium <b>₹ {data.plan.amount}</b> Monthly &nbsp;
                <img
                  src="https://buylifeinsurance.policybazaar.com/KotakeTermNew/images/web/info.svg"
                  alt=""
                />
              </p>
              <button className="btn-primary">Proceed</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </PaymentDiv>
  );
};
