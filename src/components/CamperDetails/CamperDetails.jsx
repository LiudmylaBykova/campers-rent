import React, { useState } from "react";

import icon from "../../assets/icons.svg";
import css from "../CamperDetails/CamperDetails.module.css";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";

const CamperDetails = ({ camper }) => {
  const [isActive, setIsActive] = useState("features");

  const handleLinkClick = (component) => {
    setIsActive(component);
  };
  return (
    <div className={css.card}>
      <div className={css.titleWrap}>
        <h2 className={css.name}>{camper.name}</h2>
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
        <p className={css.price}>€{camper.price}, 00</p>
      </div>
      <ul className={css.imgList}>
        {camper.gallery.map((item, index) => (
          <li key={index}>
            <div className={css.imgWrap}>
              {" "}
              <img
                className={css.img}
                src={item}
                alt={camper.name}
                width={290}
                height={310}
              />
            </div>
          </li>
        ))}
      </ul>
      <p className={css.description}>{camper.description}</p>
      <div className={css.detailsContainer}>
        <div className={css.detailsWrap}>
          <button
            type="button"
            className={
              isActive === "features" ? css.detailsInfoActive : css.detailsInfo
            }
            onClick={() => handleLinkClick("features")}
          >
            Feautures
          </button>
          <button
            type="button"
            className={
              isActive === "reviews" ? css.detailsInfoActive : css.detailsInfo
            }
            onClick={() => handleLinkClick("reviews")}
          >
            Reviews
          </button>
        </div>
        {isActive === "features" && <Features camper={camper} />}
        {isActive === "reviews" && <Reviews camper={camper} />}
      </div>
    </div>
  );
};

export default CamperDetails;
