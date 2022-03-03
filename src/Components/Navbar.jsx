import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Nav } from "../Elements/NavbarFooter";
import logo from "../Images/logo.svg";
import userIcon from "../Images/Icons/user-icon.svg";
import { SignIn } from "./SignIn";
import { useDispatch } from "react-redux";
import { logoutRequest, logoutSuccess } from "../Redux/Auth/auth.action";

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
          className={open ? `drop-down show` : "drop-down hide"}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li>Term Insurance</li>
              <li>Saral Jeevan Bima</li>
              <li>Life Insurance</li>
              <li>1 Crore Term Insurance</li>
              <li>Term Insurance Return of Premium</li>
              <li>Term Insurance for Spouse</li>
              <li>Term Insurance Calculator</li>
              <li>Dedicated Claim Assistance</li>
            </ul>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li>Term Insurance</li>
              <li>Saral Jeevan Bima</li>
              <li>Life Insurance</li>
              <li>1 Crore Term Insurance</li>
              <li>Term Insurance Return of Premium</li>
              <li>Term Insurance for Spouse</li>
              <li>Term Insurance Calculator</li>
              <li>Dedicated Claim Assistance</li>
            </ul>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li>Term Insurance</li>
              <li>Saral Jeevan Bima</li>
              <li>Life Insurance</li>
              <li>1 Crore Term Insurance</li>
              <li>Term Insurance Return of Premium</li>
              <li>Term Insurance for Spouse</li>
              <li>Term Insurance Calculator</li>
              <li>Dedicated Claim Assistance</li>
            </ul>
          </div>
        </div>
      )}

{text === "Renew Your Policy" && (
        <div
          className={open ? `drop-down show` : "drop-down hide"}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li>Term Insurance</li>
              <li>Saral Jeevan Bima</li>
              <li>Life Insurance</li>
              <li>1 Crore Term Insurance</li>
              <li>Term Insurance Return of Premium</li>
              <li>Term Insurance for Spouse</li>
              <li>Term Insurance Calculator</li>
              <li>Dedicated Claim Assistance</li>
            </ul>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li>Term Insurance</li>
              <li>Saral Jeevan Bima</li>
              <li>Life Insurance</li>
              <li>1 Crore Term Insurance</li>
              <li>Term Insurance Return of Premium</li>
              <li>Term Insurance for Spouse</li>
              <li>Term Insurance Calculator</li>
              <li>Dedicated Claim Assistance</li>
            </ul>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li>Term Insurance</li>
              <li>Saral Jeevan Bima</li>
              <li>Life Insurance</li>
              <li>1 Crore Term Insurance</li>
              <li>Term Insurance Return of Premium</li>
              <li>Term Insurance for Spouse</li>
              <li>Term Insurance Calculator</li>
              <li>Dedicated Claim Assistance</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
