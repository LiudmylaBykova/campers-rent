import React from "react";

import icon from "../../assets/icons.svg";
import css from "../FeaturesList/FeaturesList.module.css";

const FeaturesList = ({ camper }) => {
  return (
    <ul className={css.featuresList}>
      <li>
        <span className={css.span}>
          <svg width="20" height="20">
            <use href={`${icon}#icon-users`}></use>
          </svg>
          {camper.adults} Adults
        </span>
      </li>
      {camper.children > 0 && (
        <li>
          <span className={css.span}>
            <svg width="20" height="20">
              <use href={`${icon}#icon-children`}></use>
            </svg>
            {camper.children} Children
          </span>
        </li>
      )}
      <li>
        <span className={css.span}>
          <svg width="20" height="20">
            <use href={`${icon}#icon-automatic`}></use>
          </svg>
          {camper.transmission}
        </span>
      </li>
      {camper.details.airConditioner > 0 && (
        <li>
          <span className={css.span}>
            <svg width="20" height="20">
              <use href={`${icon}#icon-wind`}></use>
            </svg>
            AC
          </span>
        </li>
      )}
      {camper.engine && (
        <li>
          <span className={css.span}>
            <svg width="20" height="20">
              <use href={`${icon}#icon-petrol`}></use>
            </svg>
            {camper.engine}
          </span>
        </li>
      )}
      {camper.details.bathroom > 0 && (
        <li>
          <span className={css.span}>
            <svg width="20" height="20">
              <use href={`${icon}#icon-bath`}></use>
            </svg>
            Bathroom
          </span>
        </li>
      )}
      {camper.details.kitchen > 0 && (
        <li>
          <span className={css.span}>
            <svg width="20" height="20">
              <use href={`${icon}#icon-kitchen`}></use>
            </svg>
            Kitchen
          </span>
        </li>
      )}
      {camper.details.beds > 0 && (
        <li>
          <span className={css.span}>
            <svg width="20" height="20">
              <use href={`${icon}#icon-bad`}></use>
            </svg>
            {camper.details.beds} Bads
          </span>
        </li>
      )}
      {camper.details.airConditioner > 0 && (
        <li>
          <span className={css.span}>
            <svg width="20" height="20">
              <use href={`${icon}#icon-air-conditioner`}></use>
            </svg>
            {camper.details.airConditioner} Air conditioner
          </span>
        </li>
      )}
      {camper.details.TV > 0 && (
        <li>
          <span className={css.span}>
            <svg width="20" height="20">
              <use href={`${icon}#icon-tv`}></use>
            </svg>
            TV
          </span>
        </li>
      )}
      {camper.details.CD > 0 && (
        <li>
          <span className={css.span}>
            <svg width="20" height="20">
              <use href={`${icon}#icon-cd`}></use>
            </svg>
            CD
          </span>
        </li>
      )}
      {camper.details.radio > 0 && (
        <li>
          <span className={css.span}>
            <svg width="20" height="20">
              <use href={`${icon}#icon-radio`}></use>
            </svg>
            Radio
          </span>
        </li>
      )}
      {camper.details.shower > 0 && (
        <li>
          <span className={css.span}>
            <svg width="20" height="20">
              <use href={`${icon}#icon-shower`}></use>
            </svg>
            Shower
          </span>
        </li>
      )}
      {camper.details.toilet > 0 && (
        <li>
          <span className={css.span}>
            <svg width="20" height="20">
              <use href={`${icon}#icon-paper`}></use>
            </svg>
            Toilet
          </span>
        </li>
      )}
      {camper.details.freezer > 0 && (
        <li>
          <span className={css.span}>
            <svg width="20" height="20">
              <use href={`${icon}#icon-freezer`}></use>
            </svg>
            Freezer
          </span>
        </li>
      )}
      {camper.details.hob > 0 && (
        <li>
          <span className={css.span}>
            <svg width="20" height="20">
              <use href={`${icon}#icon-plate`}></use>
            </svg>
            {camper.details.hob} Hob
          </span>
        </li>
      )}
      {camper.details.microwave > 0 && (
        <li>
          <span className={css.span}>
            <svg width="20" height="20">
              <use href={`${icon}#icon-plate`}></use>
            </svg>
            Microwave
          </span>
        </li>
      )}
      {camper.details.gas > 0 && (
        <li>
          <span className={css.span}>
            <svg width="20" height="20">
              <use href={`${icon}#icon-petrol`}></use>
            </svg>
            Gas
          </span>
        </li>
      )}
      {camper.details.water > 0 && (
        <li>
          <span className={css.span}>
            <svg width="20" height="20">
              <use href={`${icon}#icon-water`}></use>
            </svg>
            Water
          </span>
        </li>
      )}
    </ul>
  );
};

export default FeaturesList;
