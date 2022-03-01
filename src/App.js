import React from "react";
import "./App.css";
import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import { Routers } from "./Routers/Routers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
