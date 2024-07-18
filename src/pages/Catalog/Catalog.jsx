import React, { useEffect, useState } from "react";
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
  // const isLoading = useSelector(selectIsLoading);
  // const isError = useSelector(selectIsError);
  const campers = useSelector(selectCampers);
  const [allCampers, setAllCampers] = useState([]);
  const [campersToShow, setCampersToShow] = useState(4);

  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch]);

  useEffect(() => {
    setAllCampers(campers.slice(0, campersToShow));
  }, [campers, campersToShow]);

  const handleLoadMoreBtn = () => {
    setCampersToShow((prev) => prev + 4);
  };

  return (
    <div className={css.section}>
      <SearchBar />
      <div className={css.listWrap}>
        {allCampers && allCampers.length > 0 ? (
          <ul className={css.list}>
            {allCampers.map((camper) => (
              <li key={camper._id}>
                <CamperCard camper={camper} />
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
        <button
          className={css.loadMoreBtn}
          type="button"
          onClick={handleLoadMoreBtn}
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Catalog;
