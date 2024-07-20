import React from "react";

import css from "../Favorites/Favorites.module.css";
import { useSelector } from "react-redux";
import { selectCampersFavorites } from "../../redux/selectors";
import CamperCard from "../../components/CamperCard/CamperCard";

const Favorites = () => {
  const favorites = useSelector(selectCampersFavorites);
  return (
    <div className={css.section}>
      <div className={css.container}>
        {favorites.length !== 0 ? (
          <div className={css.listWrap}>
            <ul className={css.list}>
              {favorites.map((camper) => (
                <li key={camper._id}>
                  <CamperCard camper={camper} />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className={css.text}>Favorites is empty!</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
