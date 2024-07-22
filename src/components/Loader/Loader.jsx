import React from "react";

import { ThreeDots } from "react-loader-spinner";
import css from "../Loader/Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loader}>
      <ThreeDots
        height="80"
        width="80"
        color="#E44848"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
