import React from "react";

import css from "../Favorites/Favorites.module.css";
import { useSelector } from "react-redux";
import { selectCampersFavorites, selectIsError } from "../../redux/selectors";
import CamperCard from "../../components/CamperCard/CamperCard";
import { Link } from "react-router-dom";

const Favorites = () => {
  const favorites = useSelector(selectCampersFavorites);
  const isError = useSelector(selectIsError);
  return (
    <div className={css.section}>
      <div className={css.container}>
        {favorites.length !== 0 ? (
          <div className={css.listWrap}>
            <ul className={css.list}>
              {favorites.map((camper) => (
                <li key={camper._id}>
                  {isError && <ErrorMessage />}
                  {!isError && <CamperCard camper={camper} />}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <>
            <p className={css.text}>Your favorites list is empty!</p>
            <Link to="/catalog" className={css.link}>
              See all campers
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Favorites;
