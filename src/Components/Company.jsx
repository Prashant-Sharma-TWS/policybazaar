import React from "react";
import { QuoteCompany } from "../Elements/Quotes";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";

export const Company = () => {
  return (
    <QuoteCompany>
      <div>
        <div>
          <p>
            <input type="checkbox" />
            Plans that Return my premium.(Opted by 23% Customers)
          </p>
          <p>
            <b>All at one go</b>
          </p>
          <p>
            <p>
              <input type="checkbox" />
              Save upto
            </p>
            <b>25%</b>
            <b className="rotate-five"></b>
          </p>
        </div>
        <div>
          <ul>
            <li>
              <input type="text" placeholder="Search by name" />
            </li>
            <li>
              Life Cover
              <select name="life-cover" id="life-cover">
                <option value="45 Lac">45 Lac</option>
                <option value="50 Lac">50 Lac</option>
                <option value="55 Lacs">55 Lac</option>
                <option value="60 Lac">60 Lac</option>
                <option value="65 Lac">65 Lac</option>
              </select>
            </li>
            <li>
              Cover till age
              <select name="cover-till-age" id="cover-till-age">
                <option value="45 yrs">45 yrs</option>
                <option value="50 yrs">50 yrs</option>
                <option value="55 yrss">55 yrs</option>
                <option value="60 yrs">60 yrs</option>
                <option value="65 yrs">65 yrs</option>
              </select>
            </li>
            <li>
              Claim Settled
              <BsArrowUp />
              <BsArrowDown />
            </li>
            <li>
              Pay Monthly{" "}
              <input
                type="checkbox"
                checked
                data-toggle="toggle"
                data-on="<i class='fa fa-play'></i> Play"
                data-off="<i class='fa fa-pause'></i> Pause"
              ></input>{" "}
              Pay Yearly
            </li>
          </ul>
        </div>
      </div>
    </QuoteCompany>
  );
};
