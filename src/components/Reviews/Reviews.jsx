import React from "react";
import { Rating } from "@mui/material";

import icon from "../../assets/icons.svg";
import css from "../Reviews/Reviews.module.css";

const Reviews = ({ camper }) => {
  return (
    <div className={css.reviewsWrap}>
      <ul className={css.reviewsList}>
        {camper.reviews.map((reviewer, index) => (
          <li key={index}>
            <div className={css.avatarWrap}>
              <div className={css.avatar}>
                {reviewer.reviewer_name.slice(0, 1)}
              </div>
              <div className={css.ratingWrap}>
                <h2 className={css.reviewerName}>{reviewer.reviewer_name}</h2>
                <Rating
                  name="half-rating-read"
                  defaultValue={reviewer.reviewer_rating}
                  precision={0.5}
                  readOnly
                />
              </div>
            </div>
            <p className={css.reviewerComment}>{reviewer.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
