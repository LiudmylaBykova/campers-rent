import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCampersFavorites } from "../../redux/selectors";
import icon from "../../assets/icons.svg";
import css from "../Header/Header.module.css";

const Header = () => {
  const favorites = useSelector(selectCampersFavorites);
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
          {favorites.length > 0 ? (
            <span className={css.amount}>{favorites.length} </span>
          ) : (
            ""
          )}
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
