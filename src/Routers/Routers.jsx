import React from "react";
import { Route, Routes } from "react-router-dom";
import { Error } from "../Elements/NavbarFooter";
import { Home } from "../Pages/Home";
import { Insurance } from "../Pages/Insurance";
import { Payments } from "../Pages/Payments";
import { Quotes } from "../Pages/Quotes";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/policybazaar" element={<Home />} />
        <Route
          path="/policybazaar/*"
          element={<Error>404 &nbsp; Not Found</Error>}
        />
        <Route
          path="/policybazaar/Term%20Life%20Insurance"
          element={<Insurance />}
        />
        <Route
          path="/policybazaar/Term%20Life%20Insurance/quotes"
          element={<Quotes />}
        />
        <Route
          path="/policybazaar/Term%20Life%20Insurance/quotes/:id/payments"
          element={<Payments />}
        />
        <Route
          path="/policybazaar/Health%20Insurance"
          element={<Insurance />}
        />
        <Route
          path="/policybazaar/Health%20Insurance/quotes"
          element={<Quotes />}
        />
        <Route
          path="/policybazaar/Health%20Insurance/quotes/:id/payments"
          element={<Payments />}
        />
        <Route
          path="/policybazaar/Investment%20Plans"
          element={<Insurance />}
        />
        <Route
          path="/policybazaar/Investment%20Plans/quotes"
          element={<Quotes />}
        />
        <Route
          path="/policybazaar/Investment%20Plans/quotes/:id/payments"
          element={<Payments />}
        />
        <Route path="/policybazaar/Car%20Insurance" element={<Insurance />} />
        <Route
          path="/policybazaar/Car%20Insurance/quotes"
          element={<Quotes />}
        />
        <Route
          path="/policybazaar/Car%20Insurance/quotes/:id/payments"
          element={<Payments />}
        />
        <Route
          path="/policybazaar/2%20Wheeler%20Insurance"
          element={<Insurance />}
        />
        <Route
          path="/policybazaar/2%20Wheeler%20Insurance/quotes"
          element={<Quotes />}
        />
        <Route
          path="/policybazaar/2%20Wheeler%20Insurance/quotes/:id/payments"
          element={<Payments />}
        />
        <Route
          path="/policybazaar/Family%20Health%20Insurance"
          element={<Insurance />}
        />
        <Route
          path="/policybazaar/Family%20Health%20Insurance/quotes"
          element={<Quotes />}
        />
        <Route
          path="/policybazaar/Family%20Health%20Insurance/quotes/:id/payments"
          element={<Payments />}
        />
        <Route
          path="/policybazaar/Guranteed%20Return%20Plan"
          element={<Insurance />}
        />
        <Route
          path="/policybazaar/Guranteed%20Return%20Plan/quotes"
          element={<Quotes />}
        />
        <Route
          path="/policybazaar/Guranteed%20Return%20Plan/quotes/:id/payments"
          element={<Payments />}
        />
        <Route
          path="/policybazaar/Saral%20Jeevan%20Bima"
          element={<Insurance />}
        />
        <Route
          path="/policybazaar/Saral%20Jeevan%20Bima/quotes"
          element={<Quotes />}
        />
        <Route
          path="/policybazaar/Saral%20Jeevan%20Bima/quotes/:id/payments"
          element={<Payments />}
        />
        <Route
          path="/policybazaar/Travel%20Insurance"
          element={<Insurance />}
        />
        <Route
          path="/policybazaar/Travel%20Insurance/quotes"
          element={<Quotes />}
        />
        <Route
          path="/policybazaar/Travel%20Insurance/quotes/:id/payments"
          element={<Payments />}
        />
        <Route
          path="/policybazaar/Childs%20Savings%20Plans"
          element={<Insurance />}
        />
        <Route
          path="/policybazaar/Childs%20Savings%20Plans/quotes"
          element={<Quotes />}
        />
        <Route
          path="/policybazaar/Childs%20Savings%20Plans/quotes/:id/payments"
          element={<Payments />}
        />
        <Route
          path="/policybazaar/Retirement%20Plans"
          element={<Insurance />}
        />
        <Route
          path="/policybazaar/Retirement%20Plans/quotes"
          element={<Quotes />}
        />
        <Route
          path="/policybazaar/Retirement%20Plans/quotes/:id/payments"
          element={<Payments />}
        />
        <Route
          path="/policybazaar/Group%20Health%20Insurance"
          element={<Insurance />}
        />
        <Route
          path="/policybazaar/Group%20Health%20Insurance/quotes"
          element={<Quotes />}
        />
        <Route
          path="/policybazaar/Group%20Health%20Insurance/quotes/:id/payments"
          element={<Payments />}
        />
        <Route
          path="/policybazaar/1%20Cr%20Health%20Insurance"
          element={<Insurance />}
        />
        <Route
          path="/policybazaar/1%20Cr%20Health%20Insurance/quotes"
          element={<Quotes />}
        />
        <Route
          path="/policybazaar/1%20Cr%20Health%20Insurance/quotes/:id/payments"
          element={<Payments />}
        />
        <Route path="/*" element={<Error>404 &nbsp; Not Found</Error>} />
      </Routes>
    </>
  );
};
