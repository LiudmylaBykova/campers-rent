import React from "react";
import BookingForm from "../BookingForm/BookingForm";

import icon from "../../assets/icons.svg";
import css from "../Features/Features.module.css";

const Features = ({ camper }) => {
  console.log(camper);
  return (
    <div className={css.featuresContainer}>
      <div className={css.featuresWrap}>
        <ul className={css.featuresList}>
          <li>
            <span className={css.span}>
              <svg width="20" height="20">
                <use href={`${icon}#icon-users`}></use>
              </svg>
              {camper.adults} Adults
            </span>
          </li>
          <li>
            <span className={css.span}>
              <svg width="20" height="20">
                <use href={`${icon}#icon-automatic`}></use>
              </svg>
              Automatic
            </span>
          </li>
          <li>
            <span className={css.span}>
              <svg width="20" height="20">
                <use href={`${icon}#icon-wind`}></use>
              </svg>
              AC
            </span>
          </li>
          <li>
            <span className={css.span}>
              <svg width="20" height="20">
                <use href={`${icon}#icon-petrol`}></use>
              </svg>
              Petrol
            </span>
          </li>
          <li>
            <span className={css.span}>
              <svg width="20" height="20">
                <use href={`${icon}#icon-kitchen`}></use>
              </svg>
              Kitchen
            </span>
          </li>
          <li>
            <span className={css.span}>
              <svg width="20" height="20">
                <use href={`${icon}#icon-bad`}></use>
              </svg>
              {camper.details.beds} Bads
            </span>
          </li>
          <li>
            <span className={css.span}>
              <svg width="20" height="20">
                <use href={`${icon}#icon-air-conditioner`}></use>
              </svg>
              {camper.details.airConditioner} Air Conditioner
            </span>
          </li>
          <li>
            <span className={css.span}>
              <svg width="20" height="20">
                <use href={`${icon}#icon-cd`}></use>
              </svg>
              CD
            </span>
          </li>
          <li>
            <span className={css.span}>
              <svg width="20" height="20">
                <use href={`${icon}#icon-radio`}></use>
              </svg>
              Radio
            </span>
          </li>
          <li>
            <span className={css.span}>
              <svg width="20" height="20">
                <use href={`${icon}#icon-plate`}></use>
              </svg>
              {camper.details.hob} Hob
            </span>
          </li>
        </ul>
        <div>
          <div className={css.titleWrap}>
            <h2 className={css.title}>Vehicle details</h2>
          </div>
          <div className={css.detailsItem}>
            <span className={css.detailsSpan}>Form</span>
            <span className={css.detailsSpan}>Panel truck</span>
          </div>
          <ul>
            <li className={css.detailsItem}>
              <span className={css.detailsSpan}>Length</span>
              <span className={css.detailsSpan}>{camper.length}</span>
            </li>
            <li className={css.detailsItem}>
              <span className={css.detailsSpan}>Width</span>
              <span className={css.detailsSpan}>{camper.width}</span>
            </li>
            <li className={css.detailsItem}>
              <span className={css.detailsSpan}>Height</span>
              <span className={css.detailsSpan}>{camper.height}</span>
            </li>
            <li className={css.detailsItem}>
              <span className={css.detailsSpan}>Tank</span>
              <span className={css.detailsSpan}>{camper.tank}</span>
            </li>
            <li className={css.detailsItem}>
              <span className={css.detailsSpan}>Consumption</span>
              <span className={css.detailsSpan}>{camper.consumption}</span>
            </li>
          </ul>
        </div>
      </div>
      <BookingForm />
    </div>
  );
};

export default Features;
