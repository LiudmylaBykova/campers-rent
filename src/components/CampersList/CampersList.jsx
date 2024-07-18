import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCampers,
  selectIsError,
  selectIsLoading,
} from "../../redux/selectors";
import { getAllCampers } from "../../redux/campersOps";
import CamperCard from "../../components/CamperCard/CamperCard";

import css from "../CampersList/CampersList.module.css";

const CampersList = () => {
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
    <div className={css.listWrap}>
      {allCampers && (
        <ul className={css.list}>
          {allCampers.map((camper) => (
            <li key={camper._id}>
              <CamperCard camper={camper} />
            </li>
          ))}
        </ul>
      )}
      {allCampers.length < campers.length && (
        <button
          className={css.loadMoreBtn}
          type="button"
          onClick={handleLoadMoreBtn}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default CampersList;
