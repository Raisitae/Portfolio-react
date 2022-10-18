import React from "react";
import Main from "../context/Main.js";
import Header from "../context/Header.js";
import SectionPresentation from "../context/SectionPresentation.js";
import { BrowserRouter } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer.js";

const App = () => {
  return (
    <div className="div__contenido">
      <BrowserRouter>
        <Header />
        <SectionPresentation />
        <Main />
        <ItemListContainer />
      </BrowserRouter>
    </div>
  );
};

export default App;
