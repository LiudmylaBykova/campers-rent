import React from "react";

import icon from "../../assets/icons.svg";

import css from "../Header/Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={css.header}>
      <Link to="/" className={css.link}>
        Campers
        <svg width="40" height="40">
          <use className={css.svg} href={`${icon}#icon-car3`}></use>
        </svg>
      </Link>
    </header>
  );
};

export default Header;
