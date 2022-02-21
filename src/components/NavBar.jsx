import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navBar.scss";

const NavBar = () => {
  return (
    <nav className="navBar">
      <ul className="navBar__list">
        <li className="navBar__items">
          <NavLink className="navBar__links" to="/about">
            Quienes Somos
          </NavLink>
        </li>
        <li className="navBar__items">
          <NavLink className="navBar__links" to="/products">
            Productos
          </NavLink>
        </li>
        <li className="navBar__items">
          <NavLink className="navBar__links" to="contact">
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
