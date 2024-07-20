import React from "react";

import css from "../Favorites/Favorites.module.css";
import { useSelector } from "react-redux";
import { selectCampersFavorites } from "../../redux/selectors";
import CampersList from "../../components/CampersList/CampersList";
import CamperDetails from "../../components/CamperDetails/CamperDetails";

const Favorites = () => {
  const favorites = useSelector(selectCampersFavorites);
  console.log(favorites);
  return (
    <div className={css.section}>
      <div className={css.container}>
        {favorites.length !== 0 ? (
          <CampersList campers={favorites} />
        ) : (
          <p className={css.text}>Favorites is empty!</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
