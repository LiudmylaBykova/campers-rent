import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectCampers,
  selectIsError,
  selectIsLoading,
} from "../../redux/selectors";
import CamperCard from "../../components/CamperCard/CamperCard";
import css from "../CampersList/CampersList.module.css";
import { getAllCampers } from "../../redux/campers/campersOps";

const CampersList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const campers = useSelector(selectCampers);
  const [campersToShow, setCampersToShow] = useState([]);
  const [perPage, setPerPage] = useState(4);

  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch]);

  useEffect(() => {
    setCampersToShow(campers.slice(0, perPage));
  }, [campers, perPage]);

  const handleLoadMoreBtn = () => {
    setPerPage((prev) => prev + 4);
  };

  return (
    <div className={css.listWrap}>
      {campersToShow && (
        <ul className={css.list}>
          {campersToShow.map((camper) => (
            <li key={camper._id}>
              <CamperCard camper={camper} />
            </li>
          ))}
        </ul>
      )}
      {campersToShow.length < campers.length && (
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
