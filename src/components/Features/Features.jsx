import React from "react";

import FeaturesList from "../FeaturesList/FeaturesList";
import css from "../Features/Features.module.css";

const Features = ({ camper }) => {
  return (
    <div className={css.featuresWrap}>
      <div className={css.featuresListWrap}>
        <FeaturesList camper={camper} />
      </div>
      <div>
        <div className={css.titleWrap}>
          <h2 className={css.title}>Vehicle details</h2>
        </div>
        <div className={css.detailsItem}>
          <span className={css.detailsSpan}>Form</span>
          <span className={css.detailsSpan}>{camper.form}</span>
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
  );
};

export default Features;
