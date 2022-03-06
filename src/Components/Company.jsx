import React, { useState, useEffect } from "react";
import { QuoteCompany } from "../Elements/Quotes";
import { BsArrowUp, BsArrowDown, BsSortUpAlt } from "react-icons/bs";
import sideImage1 from "../Images/side-image-1.png";
import sideImage2 from "../Images/side-image-2.png";
import sideImage3 from "../Images/side-image-3.png";
import listOfInsuranceCompany from "../items.json";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUserDataRequest,
  updateUserDataSuccess,
} from "../Redux/Data/data.action";
import { useLocation, useNavigate } from "react-router-dom";

export const Company = () => {
  const dispatch = useDispatch();
  const [companies, setCompanies] = useState([]);
  const { data } = useSelector((state) => state.user);
  const [currFilter, setCurrFilter] = useState(data.filter);

  useEffect(() => {
    setCompanies(listOfInsuranceCompany.insurance);
  }, []);

  console.log(companies);
  const handleChange = (e) => {
    let { name, value } = e.target;
    if (data.filter.switch === "on") value = "";

    if (name === "name") handleName(value);
    if (name === "amount") handleAmount(value);
    if (name === "age") handleAge(value);
    if (name === "sort") {
      handleSort(value);
      return;
    }
    if (name === "switch") handleSwitch(value);

    dispatch(updateUserDataRequest());
    dispatch(
      updateUserDataSuccess({
        filter: { ...data.filter, [name]: value },
        card: { ...data.card },
        plan: { ...data.plan },
      })
    );
    setCurrFilter({ ...currFilter, [name]: value });
  };

  const handleSwitch = (value) => {
    const newData = companies.map((company) => {
      if (value === "on") {
        return {
          ...company,
          price: Math.round(company.price * 12).toString(),
        };
      }
      return {
        ...company,
        price: Math.round(company.price / 12).toString(),
      };
    });
    setCompanies(newData);
  };
  const handleSort = (value) => {
    if (data.filter.sort === "asc") {
      const newData = companies.sort((a, b) => b.claimchance - a.claimchance);
      setCompanies(newData);
      dispatch(updateUserDataRequest());
      dispatch(
        updateUserDataSuccess({
          filter: { ...data.filter, sort: "desc" },
          card: { ...data.card },
          plan: { ...data.plan },
        })
      );
      return;
    }
    const newData = companies.sort((a, b) => a.claimchance - b.claimchance);
    setCompanies(newData);
    dispatch(updateUserDataRequest());
    dispatch(
      updateUserDataSuccess({
        filter: { ...data.filter, sort: "asc" },
        card: { ...data.card },
        plan: { ...data.plan },
      })
    );
  };
  const handleAge = (value) => {
    const newData = companies.filter((company) => company.till === value);
    setCompanies(newData);
  };
  const handleName = (value) => {
    console.log(value);
    const newData = companies.filter((company) =>
      company.name.toLowerCase().includes(value.toLowerCase())
    );
    setCompanies(newData);
  };
  const handleAmount = (value) => {
    const newData = companies.filter((company) => company.lifeCover === value);
    setCompanies(newData);
  };

  const handleReset = () => {
    setCompanies(listOfInsuranceCompany.insurance);
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
        <div className="company-details">
          <div>
            <ul className="filters column">
              <li className="search-by-name">
                <input
                  type="text"
                  placeholder="Search by name"
                  name="name"
                  value={currFilter.name}
                  onChange={handleChange}
                />
              </li>
              <li className="line-in-middle"></li>
              <li className="filter-by-rupee">
                Life Cover
                <select
                  name="amount"
                  id="life-cover"
                  className="form-select"
                  value={currFilter.amount}
                  onChange={handleChange}
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
                  name="age"
                  id="cover-till-age"
                  className="form-select"
                  value={currFilter.age}
                  onChange={handleChange}
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
                <button name="sort" onClick={handleChange}>
                  Claim Settled &nbsp;
                  {data.filter.sort === "" && <BsSortUpAlt size="16px" />}
                  {data.filter.sort === "asc" && <BsArrowUp size="16px" />}
                  {data.filter.sort === "desc" && <BsArrowDown size="16px" />}
                </button>
              </li>
              <li className="line-in-middle"></li>
              <li className="toggle">
                Pay Monthly
                <label className="switch">
                  <input
                    type="checkbox"
                    name="switch"
                    // checked={data.filter.switch}
                    onChange={handleChange}
                  />
                  <span className="slider round"></span>
                </label>
                Pay Yearly
              </li>
              <div className="save-with-yearly">
                <p>Save 5%</p>
              </div>
            </ul>
            {!companies.length && (
              <button className="reset-companies" onClick={handleReset}>
                Reset
              </button>
            )}
            <ListOfCompany companies={companies} />
          </div>
          <div className="sidebar-images">
            <div>
              <img src={sideImage1} alt="sideImage1" />
            </div>
            <div>
              <img src={sideImage2} alt="sideImage2" />
            </div>
            <div>
              <img src={sideImage3} alt="sideImage3" />
            </div>
          </div>
        </div>
      </div>
    </QuoteCompany>
  );
};

const ListOfCompany = ({ companies }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.user);

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
            <li className="lac">{company.lifeCover} Lac</li>
            <li className="line-in-middle"></li>
            <li className="yrs">
              <p>{company.till} yrs</p>
              <p>
                <img
                  src="https://termlife.policybazaar.com/assets/images/Physical_medi.svg"
                  alt=""
                />
                Physical Medical
              </p>
            </li>
            <li className="line-in-middle"></li>
            <li>{company.claimchance}%</li>
            <li className="line-in-middle"></li>
            <li className="last-wala">
              <div>
                <p>Limited Period Offer</p>
                <p>Plans prices to increase soon</p>
              </div>
              <button
                onClick={(e) => {
                  dispatch(updateUserDataRequest());
                  dispatch(
                    updateUserDataSuccess({
                      filter: { ...data.filter },
                      card: { ...data.card },
                      plan: { amount: e.target.innerText.split(" ")[1] },
                    })
                  );
                  navigate(`${pathname}/${company.id}/payments`);
                }}
              >
                ₹ {company.price} <i></i>
              </button>
            </li>
          </ul>
        ))}
    </div>
  );
};
