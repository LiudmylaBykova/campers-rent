import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCampersFavorites } from "../../redux/selectors";
import {
  addFavorites,
  deleteFavorites,
} from "../../redux/campers/campersSlice";
// import { openModal } from "../../redux/modal/slice";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import FeaturesList from "../FeaturesList/FeaturesList";
import icon from "../../assets/icons.svg";
import css from "../CamperCard/CamperCard.module.css";

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectCampersFavorites);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(favorites.some((item) => item._id === camper._id));
  }, [favorites, camper._id]);

  const handleOnLikeBtnClik = () => {
    if (isActive) {
      dispatch(deleteFavorites(camper._id));
    } else {
      dispatch(addFavorites(camper));
    }
    setIsActive(!isActive);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={css.card}>
      <img
        className={css.img}
        src={camper.gallery[0]}
        alt={camper.name}
        width={290}
        height={310}
      />

      <div className={css.descriptionWrap}>
        <div className={css.nameWrap}>
          <h2 className={css.name}>{camper.name}</h2>
          <p className={css.price}>&#8364;{camper.price}, 00</p>
          <button
            className={css.likeBtn}
            type="button"
            onClick={handleOnLikeBtnClik}
          >
            <svg
              className={!isActive ? "" : css.svgFavorite}
              width="24"
              height="24"
            >
              {!isActive ? (
                <use href={`${icon}#icon-hurt`}></use>
              ) : (
                <use href={`${icon}#icon-hurt2`}></use>
              )}
            </svg>
          </button>
        </div>
        <div className={css.locationWrap}>
          <div className={css.reviewWrap}>
            <span className={css.reviews}>
              <svg className={css.svg} width="24" height="24">
                <use href={`${icon}#icon-star`}></use>
              </svg>
              {camper.rating}({camper.reviews.length} Reviews)
            </span>
          </div>
          <span className={css.location}>
            <svg width="16" height="16">
              <use href={`${icon}#icon-map`}></use>
            </svg>
            {camper.location}
          </span>
        </div>
        <p className={css.description}>{camper.description}</p>
        <div className={css.detailsWrap}>
          <FeaturesList camper={camper} />
        </div>
        <button className={css.showMoreBtn} onClick={showModal}>
          Show more
        </button>
      </div>
      <ModalWrapper isOpen={isModalOpen} onClose={closeModal} camper={camper} />
    </div>
  );
};

export default CamperCard;
