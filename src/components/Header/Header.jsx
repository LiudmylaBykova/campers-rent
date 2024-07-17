import React from "react";

import css from "../Header/Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={css.header}>
      <Link to="/" className={css.link}>
        Campers
      </Link>
    </header>
  );
};

export default Header;
