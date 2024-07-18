import React from "react";

import css from "../Favorites/Favorites.module.css";
import { useSelector } from "react-redux";
import { selectCampersFavorites } from "../../redux/selectors";
import CampersList from "../../components/CampersList/CampersList";

const Favorites = () => {
  const favorites = useSelector(selectCampersFavorites);
  console.log(favorites);
  return (
    <div className={css.section}>
      {favorites.length !== 0 ? (
        <CampersList campers={favorites} />
      ) : (
        <p>Favorites is empty</p>
      )}
    </div>
  );
};

export default Favorites;
