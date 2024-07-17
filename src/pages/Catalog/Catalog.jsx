import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCampers,
  selectIsError,
  selectIsLoading,
} from "../../redux/selectors";
import { getAllCampers } from "../../redux/campersOps";
import CamperCard from "../../components/CamperCard/CamperCard";

import css from "../Catalog/Catalog.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";

const Catalog = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const campers = useSelector(selectCampers);

  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch]);

  return (
    <div className={css.section}>
      <SearchBar />
      {campers && campers.length > 0 ? (
        <ul className={css.list}>
          {campers.map((camper) => (
            <li key={camper._id}>
              <CamperCard camper={camper} />
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default Catalog;
