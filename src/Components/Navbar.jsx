import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Nav } from "../Elements/NavbarFooter";
import logo from "../Images/logo.svg";
import userIcon from "../Images/Icons/user-icon.svg";
import img1 from "../Images/home/img1.png";
import img2 from "../Images/home/img2.png";
import img3 from "../Images/home/img3.png";
import img4 from "../Images/home/img4.png";
import img14 from "../Images/home/img14.png";
import user1 from "../Images/home/user1.jpeg";
import user2 from "../Images/home/user2.jpeg";
import user3 from "../Images/home/user3.jpeg";
import user4 from "../Images/home/user4.jpeg";
import { SignIn } from "./SignIn";
import { useDispatch } from "react-redux";
import { logoutRequest, logoutSuccess } from "../Redux/Auth/auth.action";

export const Navbar = () => {
  const { isUserLoggedIn } = useSelector((state) => state.auth);
  const [clickedSignIn, setClickedSignIn] = useState(false);
  const navigate = useNavigate();
  const [hamburger, setHamburger] = useState(false);

  return (
    <>
      <Nav>
        <div>
          <div>
            <div
              className={hamburger ? "hamburger show-anime" : "hamburger"}
              onClick={() => setHamburger(!hamburger)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div>
              <img
                src={logo}
                alt="policybazaar-logo"
                onClick={() => navigate("/policybazaar")}
              />
            </div>
            <ul>
              <ListItem
                text="Insurance Products"
                arrowDown="arrow-down"
                isUserLoggedIn={isUserLoggedIn}
              />
              <ListItem
                text="Renew Your Policy"
                arrowDown="arrow-down"
                isUserLoggedIn={isUserLoggedIn}
              />
              <ListItem text="File a claim" isUserLoggedIn={isUserLoggedIn} />
              <ListItem
                text="Support"
                arrowDown="arrow-down"
                isUserLoggedIn={isUserLoggedIn}
              />
              {isUserLoggedIn ? (
                <ListItem
                  text="User"
                  arrowDown="arrow-down"
                  isUserLoggedIn={isUserLoggedIn}
                  className="user"
                />
              ) : (
                <button onClick={() => setClickedSignIn(true)}>Sign in</button>
              )}
            </ul>
          </div>
        </div>
      </Nav>
      <SignIn
        clickedSignIn={clickedSignIn}
        setClickedSignIn={setClickedSignIn}
      />
    </>
  );
};

const ListItem = ({ text, arrowDown, className, isUserLoggedIn }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <li
        className={isUserLoggedIn && text === "User" ? "user-icon" : "normal"}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {text !== "User" ? (
          text
        ) : (
          <i>
            <img src={userIcon} alt="user-icon" />
          </i>
        )}
        <i className={arrowDown}></i>
      </li>

      {text === "User" && (
        <div
          className={open ? `drop-down show ${className}` : "drop-down hide"}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <ul>
            <li>
              <img src={user1} alt="" width="25px" />
              &nbsp;Your Profile
            </li>
            <li>
              <img src={user2} alt="" width="25px" />
              &nbsp;Your Policies
            </li>
            <li>
              <img src={user3} alt="" width="25px" />
              &nbsp;Your Transactions
            </li>
            <li
              onClick={() => {
                dispatch(logoutRequest());
                dispatch(logoutSuccess());
              }}
            >
              <img src={user4} alt="" width="25px" />
              &nbsp;Sign Out
            </li>
          </ul>
        </div>
      )}

      {/* Drop down styles for other drop-down list inside navbar */}
      {text === "Insurance Products" && (
        <div
          className={
            open ? `drop-down show insurance-products` : "drop-down hide"
          }
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <div>
            <ul>
              <h3>
                <img src={img1} alt="" width="25px" height="25px" />
                Life Insurance
              </h3>
              <li>Term Insurance</li>
              <li>Saral Jeevan Bima</li>
              <li>Life Insurance</li>
              <li>1 Crore Term Insurance</li>
              <li>Term Insurance Return of Premium</li>
              <li>Term Insurance for Spouse</li>
              <li>Term Insurance Calculator</li>
              <li>Dedicated Claim Assistance</li>
            </ul>
            <ul>
              <h3>
                <img src={img14} alt="" width="25px" height="25px" />
                Other Insurance
              </h3>
              <li>Travel Insurance</li>
              <li>Group Health Insurance</li>
              <li>Home Insurance</li>
              <li>Pet Insurance</li>
              <li>Cancer Insurance</li>
              <li>Defence Personnel Insurance</li>
              <li>General Insurance</li>
              <li>Other General Insurance Products</li>
            </ul>
            <ul>
              <h3>
                <img src={img3} alt="" width="25px" height="25px" />
                Investment Plans
              </h3>
              <li>Child Plans</li>
              <li>Pension Plans</li>
              <li>ULIP</li>
              <li>Money Back Policy</li>
              <li>Endowment Policy</li>
              <li>Tax Saving Investments</li>
              <li>Guaranteed Return Plans</li>
              <li>Capital Guarantee Plans</li>
              <li>Annuity Plans</li>
            </ul>
            <ul>
              <h3>
                <img src={img2} alt="" width="25px" height="25px" />
                Health Insurance
              </h3>
              <li>Family Health Insurance</li>
              <li>Senior Citizen Health Insurance</li>
              <li>Health Insurance for Parents</li>
              <li>Coronavirus Health Insurance</li>
              <li>Arogya Sanjeevani Policy</li>
              <li>Critical Illness Insurance</li>
              <li>Mediclaim Policy</li>
              <li>Best Health Insurance Plans</li>
              <li>Health Insurance Claim</li>
              <li>Health Insurance Calculator</li>
            </ul>
            <ul>
              <h3>
                <img src={img4} alt="" width="25px" height="25px" />
                Car Insurance
              </h3>
              <li>Motor Insurance</li>
              <li>Two Wheeler Insurance</li>
              <li>Commercial Vehicle Insurance</li>
              <li>Taxi Insurance</li>
              <li>Third Party Insurance</li>
              <li>Best Car Insurance Companies</li>
              <li>Used Car Insurance</li>
              <li>Pay As You Drive Insurance</li>
              <li>Third Party Bike Insurance</li>
              <li>E-Bike Insurance</li>
              <li>Car Insurance Calculator</li>
              <li>Two Wheeler Insurance Calculator</li>
              <li>Car Insurance Claim</li>
              <li>Motor Floater Insurance</li>
            </ul>
          </div>
        </div>
      )}

      {text === "Renew Your Policy" && (
        <div
          className={
            open ? `drop-down show renew-your-policy` : "drop-down hide"
          }
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <ul>
            <li>
              <img src={img1} alt="" />
              Life Renewal
            </li>
            <li>
              <img src={img2} alt="" />
              Health Renewal
            </li>
            <li>
              <img src={img4} alt="" />
              Motor Renewal
            </li>
            <li>Two Wheeler Renewal</li>
          </ul>
        </div>
      )}

      {text === "Support" && (
        <div
          className={open ? `drop-down show support` : "drop-down hide"}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <ul>
            <li>Policies</li>
            <li>Get help</li>
            <li>Verify your advisor</li>
            <li>Manage communication preferences</li>
            <li>Contact Us</li>
            <li>Sales: 1800-208-8787</li>
            <li>Service: 1800-258-5970</li>
            <li>
              Helpline: +91-124-6656507
              <br />
              10 AM to 7 PM (IST)
            </li>
            <li>Claims: 1800-258-5881</li>
            <li>View more</li>
          </ul>
        </div>
      )}
    </>
  );
};
