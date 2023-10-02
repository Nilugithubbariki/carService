import React, { useEffect, useState } from "react";
import "./components/Navbar.css";
import AppNavbar from "./components/AppNavbar";
import FetchData from "./FetchData";
const App = () => {
  return (
    <div className="WrapperContainer">
      <div className="mainContainer">
        <AppNavbar />
      </div>
      <FetchData />
    </div>
  );
};

export default App;
