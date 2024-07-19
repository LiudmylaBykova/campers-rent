import React from "react";

import icon from "../../assets/icons.svg";

import css from "../Header/Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.navList}>
        <NavLink to="/" className={css.linkHome}>
          Campers
          <svg width="40" height="40">
            <use className={css.svg} href={`${icon}#icon-campervan`}></use>
          </svg>
        </NavLink>
        <NavLink to="/catalog" className={css.link}>
          Catalog
        </NavLink>
        <NavLink to="/favorites" className={css.link}>
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
