import React, { useState } from "react";

import icon from "../../img/icons.svg";
import css from "../CamperCard/CamperCard.module.css";

const CamperCard = ({ camper }) => {
  console.log(camper);

  const handleOnLikeBtnClik = () => {
    setIsFaforite((camper.isFavorite = true));
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
          <p className={css.price}>€{camper.price}, 00</p>
          <button
            className={css.likeBtn}
            type="button"
            onClick={handleOnLikeBtnClik}
          >
            <svg
              className={camper.isFavorite ? css.svg : css.svgFavorite}
              width="24"
              height="24"
            >
              <use href={`${icon}#icon-hurt`}></use>
            </svg>
          </button>
        </div>
        <div className={css.locationWrap}>
          <div className={css.reviewWrap}>
            <span className={css.reviews}>
              <svg className={css.svg} width="16" height="16">
                <use href={`${icon}#icon-star`}></use>
              </svg>
              {camper.rating}({camper.reviews.length} Reviews)
            </span>
          </div>
          <span className={css.location}>
            <svg className={css.svg} width="16" height="16">
              <use href={`${icon}#icon-map-pin`}></use>
            </svg>
            {camper.location}
          </span>
        </div>
        <p className={css.description}>{camper.description}</p>
        <div className={css.detailsWrap}>
          <span className={css.detailsSpan}>
            <svg className={css.svg} width="20" height="20">
              <use href={`${icon}#icon-Users`}></use>
            </svg>
            {camper.adults} Adolts
          </span>
          <span className={css.detailsSpan}>
            <svg className={css.svg} width="20" height="20">
              <use href={`${icon}#icon-Container`}></use>
            </svg>
            Automatic
          </span>
          <span className={css.detailsSpan}>
            <svg className={css.svg} width="20" height="20">
              <use href={`${icon}#icon-petrol`}></use>
            </svg>
            Petrol
          </span>
          <span className={css.detailsSpan}>
            <svg className={css.svg} width="20" height="20">
              <use href={`${icon}#icon-kitchen`}></use>
            </svg>
            Kitchen
          </span>
          <span className={css.detailsSpan}>
            <svg className={css.svg} width="20" height="20">
              <use href={`${icon}#icon-bad`}></use>
            </svg>
            {camper.details.beds} Bad
          </span>
          <span className={css.detailsSpan}>
            <svg className={css.svg} width="20" height="20">
              <use href={`${icon}#icon-wind`}></use>
            </svg>
            AC
          </span>
        </div>
        <button className={css.showMoreBtn}>Show more</button>
      </div>
    </div>
  );
};

export default CamperCard;
