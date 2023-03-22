import React from "react";
import NavBar from "../components/NavBar";

const Header = () => {
  return (
    <header className="header">
      <div className="div__barra-nav">
        <div className="div__botones-nav">
          <div className="div__circle-red"></div>
          <div className="div__circle-yellow"></div>
          <div className="div__circle-green"></div>
        </div>
        <input
          className="input__fake"
          type="text"
          placeholder="🔒 www.raisaerlich.com"
          disabled
        />
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
