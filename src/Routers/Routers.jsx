import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../Components/Dashboard";
import { Error } from "../Elements/NavbarFooter";
import { Home } from "../Pages/Home";
import { Insurance } from "../Pages/Insurance";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/policybazaar" element={<Home />} />
        <Route path="/policybazaar/dashboard" element={<Dashboard />} />
        <Route
          path="/policybazaar/Term%20Life%20Insurance"
          element={<Insurance />}
        />
        <Route
          path="/policybazaar/*"
          element={<Error>404 &nbsp; Not Found</Error>}
        />
        <Route path="/*" element={<Error>404 &nbsp; Not Found</Error>} />
      </Routes>
    </>
  );
};
