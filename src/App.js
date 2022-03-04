import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import { Routers } from "./Routers/Routers";

function App() {
  const { isUserLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isUserLoggedIn) {
      pathname === "/policybazaar"
        ? navigate("/policybazaar")
        : navigate(`${pathname}`);
    } else {
      navigate(`${pathname}`);
    }
  }, [isUserLoggedIn, pathname, navigate]);

  return (
    <div className="App">
      <Navbar />
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
