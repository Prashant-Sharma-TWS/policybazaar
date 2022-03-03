import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Nav } from "../Elements/NavbarFooter";
import logo from "../Images/logo.svg";
import userIcon from "../Images/Icons/user-icon.svg";
import { SignIn } from "./SignIn";
import { useDispatch } from "react-redux";
import { logoutRequest, logoutSuccess } from "../Redux/Auth/auth.action";
import styles from "./Nav.module.css";

export const Navbar = () => {
  const { isUserLoggedIn } = useSelector((state) => state.auth);
  const [clickedSignIn, setClickedSignIn] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Nav>
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
          <ListItem
            text="File a claim"
            arrowDown="arrow-down"
            isUserLoggedIn={isUserLoggedIn}
          />
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
      {/* <div className={open ? `drop-down show ${className}` : "drop-down hide"}>
        <ul>
          <li>{text}</li>
        </ul>
      </div> */}
      {text === "User" && (
        <div
          className={open ? `drop-down show ${className}` : "drop-down hide"}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <ul>
            <li>Your Profile</li>
            <li>Your Policies</li>
            <li>Your Transactions</li>
            <li
              onClick={() => {
                dispatch(logoutRequest());
                dispatch(logoutSuccess());
              }}
            >
              Sign Out
            </li>
          </ul>
        </div>
      )}

      {/* Drop down styles for other drop-down list inside navbar */}
      {text === "Insurance Products" && (
        <div
          className={open ? `drop-down show nitin` : "drop-down hide"}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <div className="ruby_grid ruby_grid_lined">
            <div className="ruby_row">
              <div className="ruby_col_3">
                <h3 className="ruby_list_heading">
                  <i className="menu_ico icon_bg life_insurance"></i>
                  <a className="headlink" href="#">
                    Life Insurance
                  </a>
                </h3>
                <ul className="ul_li_ul">
                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Term Insurance</span>
                    </a>
                  </li>
                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Saral Jeevan Bima</span>
                    </a>
                  </li>
                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Life Insurance</span>
                    </a>
                  </li>
                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>1 Crore Term Insurance</span>
                    </a>
                  </li>
                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Term Insurance Return of Premium</span>
                    </a>
                  </li>
                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Term Insurance for Spouse</span>
                    </a>
                  </li>
                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Term Insurance Calculator</span>
                    </a>
                  </li>
                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Dedicated Claim Assistance</span>
                    </a>
                  </li>
                </ul>
                <h3 className="ruby_list_heading mt_30">
                  <i className="menu_ico icon_bg other_insurance"></i>
                  <a className="headlink" href="#">
                    Other Insurance
                  </a>
                </h3>
                <ul className="ul_li_ul">
                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Travel Insurance</span>
                    </a>
                  </li>
                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Group Health Insurance</span>
                    </a>
                  </li>
                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Home Insurance</span>
                    </a>
                  </li>
                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Pet Insurance</span>
                    </a>
                  </li>
                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Cancer Insurance</span>
                    </a>
                  </li>
                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Defence Personnel Insurance</span>
                    </a>
                  </li>
                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>General Insurance</span>
                    </a>
                  </li>
                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="h#">
                      <span>Other General Insurance Products</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="ruby_col_3 hidden_md">
                <h3 className="ruby_list_heading">
                  <i className="menu_ico icon_bg investment_plans"></i>
                  <a className="headlink" href="#">
                    Investment Plans
                  </a>
                </h3>
                <ul className="ul_li_ul">
                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Child Plans</span>
                    </a>
                  </li>
                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Pension Plans</span>
                    </a>
                  </li>
                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>ULIP</span>
                    </a>
                  </li>
                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Money Back Policy</span>
                    </a>
                  </li>
                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Endowment Policy</span>
                    </a>
                  </li>
                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Tax Saving Investments</span>
                    </a>
                  </li>
                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Guaranteed Return Plans</span>
                    </a>
                  </li>
                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Capital Guarantee Plans</span>
                    </a>
                  </li>
                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Annuity Plans</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="ruby_col_3 hidden_md">
                <h3 className="ruby_list_heading">
                  <i className="menu_ico icon_bg health_insurance"></i>
                  <a className="headlink" href="#">
                    Health Insurance
                  </a>
                </h3>
                <ul className="ul_li_ul">
                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Family Health Insurance</span>
                    </a>
                  </li>
                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Senior Citizen Health Insurance</span>
                    </a>
                  </li>

                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Health Insurance for Parents</span>
                    </a>
                  </li>

                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Coronavirus Health Insurance</span>
                    </a>
                  </li>

                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Arogya Sanjeevani Policy</span>
                    </a>
                  </li>

                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Critical Illness Insurance</span>
                    </a>
                  </li>

                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Mediclaim Policy</span>
                    </a>
                  </li>

                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Best Health Insurance Plans</span>
                    </a>
                  </li>

                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Health Insurance Claim</span>
                    </a>
                  </li>

                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Health Insurance Calculator</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="ruby_col_3 hidden_md">
                <h3 className="ruby_list_heading">
                  <i className="menu_ico icon_bg motor-insurance"></i>
                  <a className="headlink" href="#">
                    Car Insurance
                  </a>
                </h3>
                <ul className="ul_li_ul">
                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Motor Insurance</span>
                    </a>
                  </li>

                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Two Wheeler Insurance</span>
                    </a>
                  </li>

                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Commercial Vehicle Insurance</span>
                    </a>
                  </li>

                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Taxi Insurance</span>
                    </a>
                  </li>

                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Third Party Insurance</span>
                    </a>
                  </li>

                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Best Car Insurance Companies</span>
                    </a>
                  </li>

                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Used Car Insurance</span>
                    </a>
                  </li>

                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Pay As You Drive Insurance</span>
                    </a>
                  </li>

                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Third Party Bike Insurance</span>
                    </a>
                  </li>

                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>E-Bike Insurance</span>
                    </a>
                  </li>

                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Car Insurance Calculator</span>
                    </a>
                  </li>

                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Two Wheeler Insurance Calculator</span>
                    </a>
                  </li>

                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Car Insurance Claim</span>
                    </a>
                  </li>

                  <li className="ul_li_ul_li">
                    <a className="allmenu" href="#">
                      <span>Motor Floater Insurance</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {text === "Renew Your Policy" && (
        <div
          className={open ? `drop-down show` : "drop-down hide"}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <div>
            <ul className="ul_li_ul">
              <li className="ul_li_ul_li">
                <a href="#" rel="nofollow">
                  <span>
                    <i className="menu_ico icon_bg renew_life_insurance"></i>
                    Life Renewal
                  </span>
                </a>
              </li>

              <li className="ul_li_ul_li">
                <a href="#" rel="nofollow">
                  <span>
                    <i className="menu_ico icon_bg renew-health-insurance"></i>
                    Health Renewal
                  </span>
                </a>
              </li>

              <li className="ul_li_ul_li">
                <a href="#" rel="nofollow">
                  <span>
                    <i className="menu_ico icon_bg renew-motor-insurance"></i>
                    Motor Renewal
                  </span>
                </a>
              </li>

              <li className="ul_li_ul_li">
                <a href="#" rel="nofollow">
                  <span>
                    <i className="menu_ico icon_bg renew-two-wheeler-insurance"></i>
                    Two Wheeler Renewal
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {text === "Support" && (
        <div
          className={open ? `drop-down show` : "drop-down hide"}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <div>
            <ul className="ul_li_ul support_ui">
              <li className="policy-update hide"></li>

              <li className="ul_li_ul_li">
                <a className="redirectPolicy" href="#">
                  <i className="menu_icon_bg urpolicy"></i>
                  <span className="strong">
                    Policies
                    <span className="small-text">
                      Sign in to view all your policies
                    </span>
                  </span>
                </a>
              </li>

              <li className="ul_li_ul_li">
                <a className="getHelp" href="#">
                  <i className="menu_icon_bg raisequery"></i>
                  <span className="strong"> Get help </span>
                </a>
              </li>

              <li className="ul_li_ul_li">
                <a href="#" rel="nofollow">
                  <i className="menu_icon_bg verify-advisor"></i>
                  <span className="strong">Verify your advisor</span>
                </a>
              </li>

              <li className="ul_li_ul_li">
                <a className="mcpUrl" href="#" rel="nofollow">
                  <i className="menu_icon_bg mcp"></i>
                  <span className="strong">
                    Manage communication preferences
                  </span>
                </a>
              </li>

              <li className="ul_li_ul_li">
                <span className="sapretor">Contact Us</span>
              </li>

              <li className="ul_li_ul_li">
                <div className="wrap_with_icon">
                  <a href="#">
                    <i className="menu_icon_bg whatapp"></i>
                    <span> Connect on Whatsapp </span>
                  </a>
                  <a href="#">
                    <i className="menu_icon_bg nearme"></i>
                    <span> Offline stores near you </span>
                  </a>
                  <a href="#">
                    <i className="menu_icon_bg request-callback"></i>
                    <span>Request a callback</span>
                  </a>
                </div>
              </li>

              <li className="ul_li_ul_li">
                <a href="#">
                  <i className="menu_icon_bg sales"></i>
                  <p>Sales: 1800-208-8787</p>
                </a>
              </li>

              <li className="ul_li_ul_li">
                <a href="#">
                  <i className="menu_icon_bg service"></i>
                  <p>Service: 1800-258-5970</p>
                </a>
              </li>

              <li className="ul_li_ul_li" className="hide-nri">
                <a href="#">
                  <i className="menu_icon_bg call"></i>
                  <p>
                    Helpline: +91-124-6656507
                    <br />
                    <span className="strong">10 AM to 7 PM (IST)</span>
                  </p>
                </a>
              </li>
              <li className="ul_li_ul_li">
                <a href="#">
                  <i className="menu_icon_bg claim"></i>
                  <span> Claims: 1800-258-5881 </span>
                </a>
              </li>

              <li className="ul_li_ul_li">
                <a href="#">
                  <i className="menu_icon_bg viewmore"></i>
                  <p>View more</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
