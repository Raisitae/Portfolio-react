import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="ul__navbar">
        <li className="li__navbar">
          <a href="#about">Sobre mi</a>
        </li>
        <li className="li__navbar">
          <a href="#skills">Skills</a>
        </li>
        <li className="li__navbar">
          <a href="#education">Formación</a>
        </li>
        <li className="li__navbar">
          <a href="#projects">Proyectos</a>
        </li>
        <li className="li__navbar">Contacto</li>
      </ul>
      <Tippy
        content={
          <ul className="ul__navbar-mobile">
            <li>
              <a href="#about" className="li__navbar">
                Sobre mi
              </a>
            </li>
            <li>
              <a href="#skills" className="li__navbar">
                Skills
              </a>
            </li>
            <li>
              <a href="#education" className="li__navbar">
                Formación
              </a>
            </li>
            <li>
              <a href="#projects" className="li__navbar">
                Proyectos
              </a>
            </li>
            <li className="li__navbar">Contacto</li>
          </ul>
        }
        placement="bottom"
        trigger="click"
        hideOnClick={true}
        interactive={true}
      >
        <div className="nav-container">
          <input className="checkbox" type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
        </div>
      </Tippy>
    </nav>
  );
};

export default NavBar;
