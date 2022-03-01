import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../Components/Dashboard";
import { Error } from "../Elements/Elements";
import { Home } from "../Pages/Home";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/policybazaar" element={<Home />} />
        <Route path="/policybazaar/dashboard" element={<Dashboard />} />
        <Route path="/policybazaar/*" element={<Error>404 &nbsp; Not Found</Error>} />
        <Route path="/*" element={<Error>404 &nbsp; Not Found</Error>} />
      </Routes>
    </>
  );
};
