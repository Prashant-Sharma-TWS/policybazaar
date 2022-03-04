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
            In my absence, my family will get the life cover
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
      </div>
      <div>
        <div>
          <div>
            <ul className="filters">
              <li className="search-by-name">
                <input type="text" placeholder="Search by name" />
              </li>
              <li className="filter-by-rupee">
                Life Cover
                <select name="life-cover" id="life-cover">
                  <option value="45 Lac">45 Lac</option>
                  <option value="50 Lac">50 Lac</option>
                  <option value="55 Lacs">55 Lac</option>
                  <option value="60 Lac">60 Lac</option>
                  <option value="65 Lac">65 Lac</option>
                </select>
              </li>
              <li className="filter-by-age">
                Cover till age
                <select name="cover-till-age" id="cover-till-age">
                  <option value="45 yrs">45 yrs</option>
                  <option value="50 yrs">50 yrs</option>
                  <option value="55 yrss">55 yrs</option>
                  <option value="60 yrs">60 yrs</option>
                  <option value="65 yrs">65 yrs</option>
                </select>
              </li>
              <li className="filter-by-claim">
                Claim Settled
                <BsArrowUp />
                <BsArrowDown />
              </li>
              <li className="toggle">
                Pay Monthly
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
                Pay Yearly
              </li>
            </ul>
            <ListOfCompany />
          </div>
          <div>Hey</div>
        </div>
      </div>
    </QuoteCompany>
  );
};

const ListOfCompany = () => {
  return (
    <div className="list-of-company">
      <ul>
        <li>
          <img
            src="https://static.pbcdn.in/term-cdn/images/images/insurer/kotak_logo.png"
            alt=""
          />
          <p>Kotak Mahindra Life</p>
        </li>
        <li>30 Lac</li>
        <li>65 yrs</li>
        <li>98.5%</li>
        <li>
          <div>
            <p>Limited Period Offer</p>
            <p>Plans prices to increase soon</p>
          </div>
          <button>
            ₹ 1258 <i></i>
          </button>
        </li>
      </ul>
    </div>
  );
};
