import React from "react";

import iconHurt from "../../img/icons.svg";
import iconStar from "../../img/icons.svg";
import iconLocation from "../../img/icons.svg";
import iconUsers from "../../img/icons.svg";
import iconAutomatic from "../../img/icons.svg";
import iconPetrol from "../../img/icons.svg";
import iconKitchen from "../../img/icons.svg";
import iconBad from "../../img/icons.svg";
import iconAC from "../../img/icons.svg";

import css from "../CamperCard/CamperCard.module.css";

const CamperCard = ({ camper }) => {
  console.log(camper);
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
          <button className={css.likeBtn}>
            <svg className={css.svg} width="24" height="24">
              <use href={`${iconHurt}#icon-hurt`}></use>
            </svg>
          </button>
        </div>
        <div className={css.locationWrap}>
          <span className={css.iconSpan}>
            <svg className={css.svg} width="16" height="16">
              <use href={`${iconStar}#icon-star`}></use>
            </svg>
            {camper.rating}({camper.revievs} Reviews)
          </span>
          <span className={css.iconSpan}>
            <svg className={css.svg} width="16" height="16">
              <use href={`${iconLocation}#icon-map-pin`}></use>
            </svg>
            {camper.location}
          </span>
        </div>
        <p className={css.description}>{camper.description}</p>
        <div className={css.detailsWrap}>
          <span className={css.detailsSpan}>
            <svg className={css.svg} width="20" height="20">
              <use href={`${iconUsers}#icon-Users`}></use>
            </svg>
            {camper.adults} Adolts
          </span>
          <span className={css.detailsSpan}>
            <svg className={css.svg} width="20" height="20">
              <use href={`${iconAutomatic}#icon-Container`}></use>
            </svg>
            Automatic
          </span>
          <span className={css.detailsSpan}>
            <svg className={css.svg} width="20" height="20">
              <use href={`${iconPetrol}#icon-petrol`}></use>
            </svg>
            Petrol
          </span>
          <span className={css.detailsSpan}>
            <svg className={css.svg} width="20" height="20">
              <use href={`${iconKitchen}#icon-kitchen`}></use>
            </svg>
            Kitchen
          </span>
          <span className={css.detailsSpan}>
            <svg className={css.svg} width="20" height="20">
              <use href={`${iconBad}#icon-bad`}></use>
            </svg>
            {camper.details.beds} Bad
          </span>
          <span className={css.detailsSpan}>
            <svg className={css.svg} width="20" height="20">
              <use href={`${iconAC}#icon-wind`}></use>
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
