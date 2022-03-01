import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../Components/Dashboard";
import { Error } from "../Elements/Elements";
import { Home } from "../Pages/Home";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/*" element={<Error>Not Found</Error>} />
      </Routes>
    </>
  );
};
