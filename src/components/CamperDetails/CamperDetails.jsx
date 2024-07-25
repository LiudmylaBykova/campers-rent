import React, { useState } from "react";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";
import BookingForm from "../BookingForm/BookingForm";

import icon from "../../assets/icons.svg";
import css from "../CamperDetails/CamperDetails.module.css";

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
              <svg className={css.svgStar} width="16" height="16">
                <use href={`${icon}#icon-star`}></use>
              </svg>
              {camper.rating}({camper.reviews.length} Reviews)
            </span>
          </div>
          <span className={css.location}>
            <svg width="10" height="10">
              <use href={`${icon}#icon-map`}></use>
            </svg>
            {camper.location}
          </span>
        </div>
        <p className={css.price}>&#8364;{camper.price}, 00</p>
      </div>
      <ul className={css.imgList}>
        {camper.gallery.map((item, index) => (
          <li key={index}>
            <div className={css.imgWrap}>
              <img
                className={css.img}
                src={item}
                alt={camper.name}
                width={290}
                height={300}
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
        <div className={css.featuresContainer}>
          {isActive === "features" && <Features camper={camper} />}
          {isActive === "reviews" && <Reviews camper={camper} />}
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default CamperDetails;
