import React from "react";
import { Rating } from "@mui/material";

import css from "../Reviews/Reviews.module.css";

const Reviews = ({ camper }) => {
  return (
    <div className={css.reviewsWrap}>
      <ul className={css.reviewsList}>
        {camper.reviews.length > 0 ? (
          camper.reviews.map((reviewer, index) => (
            <li key={index}>
              <div className={css.avatarWrap}>
                <div className={css.avatar}>
                  {reviewer.reviewer_name.slice(0, 1)}
                </div>
                <div className={css.ratingWrap}>
                  <h2 className={css.reviewerName}>{reviewer.reviewer_name}</h2>
                  <Rating
                    name="half-rating-read"
                    size="small"
                    defaultValue={reviewer.reviewer_rating}
                    precision={0.5}
                    readOnly
                  />
                </div>
              </div>
              <p className={css.reviewerComment}>{reviewer.comment}</p>
            </li>
          ))
        ) : (
          <p className={css.text}>No reviews yet!</p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
