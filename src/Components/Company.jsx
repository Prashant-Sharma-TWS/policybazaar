import React, { useState } from "react";
import { QuoteCompany } from "../Elements/Quotes";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import sideImage1 from "../Images/side-image-1.png";
import sideImage2 from "../Images/side-image-2.png";
import sideImage3 from "../Images/side-image-3.png";
import listOfInsuranceCompany from "../items.json";
import { useEffect } from "react";

const initialFilter = {
  name: "",
  amount: "",
  age: "",
  sort: "",
  payMonthly: "",
  payYearly: "",
};

export const Company = () => {
  const [companies, setCompanies] = useState([]);
  const [query, setQuery] = useState("");
  const [currFilter, setCurrFilter] = useState(initialFilter);

  useEffect(() => {
    setCompanies(listOfInsuranceCompany.insurance);
    console.log(query);
  }, [companies, query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

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
          <div>
            <p>
              <input type="checkbox" />
              Save upto
            </p>
            <b>25%</b>
            <b className="rotate-five"></b>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <ul className="filters">
              <li className="search-by-name">
                <input type="text" placeholder="Search by name" />
              </li>
              <li className="line-in-middle"></li>
              <li className="filter-by-rupee">
                Life Cover
                <select
                  name="life-cover"
                  id="life-cover"
                  onChange={() => handleChange}
                >
                  <option value="45">45 Lac</option>
                  <option value="50">50 Lac</option>
                  <option value="55">55 Lac</option>
                  <option value="60">60 Lac</option>
                  <option value="65">65 Lac</option>
                </select>
              </li>
              <li className="line-in-middle"></li>
              <li className="filter-by-age">
                Cover till age
                <select
                  name="cover-till-age"
                  id="cover-till-age"
                  onChange={() => handleChange}
                >
                  <option value="45">45 yrs</option>
                  <option value="50">50 yrs</option>
                  <option value="55">55 yrs</option>
                  <option value="60">60 yrs</option>
                  <option value="65">65 yrs</option>
                </select>
              </li>
              <li className="line-in-middle"></li>
              <li className="filter-by-claim">
                Claim Settled
                <BsArrowUp />
                <BsArrowDown />
              </li>
              <li className="line-in-middle"></li>
              <li className="toggle">
                Pay Monthly
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
                Pay Yearly
              </li>
            </ul>
            <ListOfCompany companies={companies} />
          </div>
          <div>
            <div><img src={sideImage1} alt="" /></div>
            <div><img src={sideImage2} alt="" /></div>
            <div><img src={sideImage3} alt="" /></div>
          </div>
        </div>
      </div>
    </QuoteCompany>
  );
};

const ListOfCompany = ({ companies }) => {
  return (
    <div className="list-of-company">
      {Array.isArray(companies) &&
        companies.map((company) => (
          <ul key={company.id}>
            <li>
              <img src={company.image} alt="" />
              <p>{company.name}</p>
              <p>
                <img
                  src="https://termlife.policybazaar.com/assets/images/fast-delivery.svg"
                  alt=""
                />
                &nbsp;24hr claim settlement
              </p>
            </li>
            <li className="line-in-middle"></li>
            <li>{company.lifeCover}</li>
            <li className="line-in-middle"></li>
            <li>
              <p>{company.till}</p>
              <p>
                <img
                  src="https://termlife.policybazaar.com/assets/images/Physical_medi.svg"
                  alt=""
                />
                Physical Medical
              </p>
            </li>
            <li className="line-in-middle"></li>
            <li>{company.claimchance}</li>
            <li className="line-in-middle"></li>
            <li>
              <div>
                <p>Limited Period Offer</p>
                <p>Plans prices to increase soon</p>
              </div>
              <button>
                {company.price} <i></i>
              </button>
            </li>
          </ul>
        ))}
    </div>
  );
};
