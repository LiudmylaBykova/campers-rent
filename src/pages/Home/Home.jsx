import React from "react";
import { Link } from "react-router-dom";

import css from "../Home/Home.module.css";

const Home = () => {
  return (
    <div className={css.section}>
      <div className={css.container}>
        <div className={css.linkWrap}>
          <Link to="/catalog" className={css.link}>
            Catalog
          </Link>
          <Link to="/favorite" className={css.link}>
            Favorite
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
