import React, { useState } from "react";
import { Nav } from "../Elements/Elements";
import logo from "../Images/logo.svg";

export const Navbar = () => {
  return (
    <Nav>
      <div>
        <img src={logo} alt="policybazaar-logo" />
      </div>
      <ul>
        <ListItem text="Insurance Products" classProperty="arrow-down" />
        <ListItem text="Renew Your Policy" classProperty="arrow-down" />
        <ListItem text="File a claim" classProperty="arrow-down" />
        <ListItem text="Support" classProperty="arrow-down" />
        <ListItem text="User" classProperty="arrow-down" />
      </ul>
    </Nav>
  );
};

const ListItem = ({ text, classProperty }) => {
  const [open, setOpen] = useState(false);

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
