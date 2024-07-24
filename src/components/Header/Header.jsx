import React from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCampersFavorites } from "../../redux/selectors";
import icon from "../../assets/icons.svg";
import css from "../Header/Header.module.css";

const getNavLinkClassName = ({ isActive }) => {
  return clsx(css.navLink, {
    [css.active]: isActive,
  });
};

const Header = () => {
  const favorites = useSelector(selectCampersFavorites);
  return (
    <header className={css.header}>
      <nav className={css.navList}>
        <div className={css.linkHomeWrap}>
          <NavLink to="/" className={getNavLinkClassName}>
            Campers
            <svg width="40" height="40">
              <use className={css.svg} href={`${icon}#icon-campervan`}></use>
            </svg>
          </NavLink>
        </div>
        <NavLink to="/catalog" className={getNavLinkClassName}>
          Catalog
        </NavLink>
        <NavLink to="/favorites" className={getNavLinkClassName}>
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
