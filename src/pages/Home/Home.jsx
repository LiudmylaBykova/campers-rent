import React from "react";
import { Link } from "react-router-dom";

import css from "../Home/Home.module.css";

const Home = () => {
  return (
    <div className={css.section}>
      <div className={css.container}>
        <div className={css.titleWrap}>
          <h1 className={css.title}>
            Choose the <span className={css.titleSpan}> perfect</span> campervan
            for your road trip!
          </h1>
          <p className={css.text}>Find, book and pay easily </p>
        </div>
        <div className={css.linkWrap}>
          <Link to="/catalog" className={css.link}>
            Catalog
          </Link>
          <Link to="/favorites" className={css.link}>
            Favorites
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
