import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Nav } from "../Elements/Elements";
import logo from "../Images/logo.svg";
import flag from "../Images/flag.svg";
import formImage from "../Images/form-image.webp";

export const Navbar = () => {
  const { isUserLoggedIn } = useSelector((state) => state.auth);
  const [clickedSignIn, setClickedSignIn] = useState(false);

  return (
    <>
      <Nav>
        <div>
          <img src={logo} alt="policybazaar-logo" />
        </div>
        <ul>
          <ListItem text="Insurance Products" classProperty="arrow-down" />
          <ListItem text="Renew Your Policy" classProperty="arrow-down" />
          <ListItem text="File a claim" classProperty="arrow-down" />
          <ListItem text="Support" classProperty="arrow-down" />
          {isUserLoggedIn ? (
            <ListItem text="User" classProperty="arrow-down" />
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

const ListItem = ({ text, classProperty }) => {
  // const [open, setOpen] = useState(false);

  return (
    <>
      <li>
        {text}
        <i className={classProperty}></i>
      </li>
      <div className="drop-down insurance-product">
        <ul>
          <li>hey</li>
        </ul>
      </div>
    </>
  );
};

const SignIn = ({ clickedSignIn, setClickedSignIn }) => {
  return (
    <div className={clickedSignIn ? "sign-in-show" : "sign-in-hide"}>
      <div className="form-container">
        <div className="close-modal" onClick={() => setClickedSignIn(false)}>
          <span></span>
          <span></span>
        </div>
        <div className="form-top">
          <div>
            <img src={logo} alt="policybazaar-logo" />
          </div>
          <div>
            <img src={formImage} alt="formimg" />
            <h6>To sign in, please enter your mobile number</h6>
          </div>
        </div>
        <div className="form-bottom">
          <div className="mobile-input">
            <img src={flag} alt="in" />
            <i className="arrow-down"></i>
            <p>+91</p>
            <input type="text" name="mobile" placeholder="Mobile Number" />
          </div>
          <button className="sign-in-top">Sign in with OTP</button>
          <button className="sign-in-password">Sign in with Password</button>
          <p>
            First Time User? <b>Sign up</b>
          </p>
        </div>
      </div>
    </div>
  );
};
