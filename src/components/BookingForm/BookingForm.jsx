import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { closeModal } from "../../redux/modal/slice";
import css from "../BookingForm/BookingForm.module.css";

const schema = yup.object().shape({
  name: yup.string().required("Please, enter your name!"),
  email: yup.string().required("Please, enter your email!"),
  date: yup.date().required("Please, enter the date!"),
  comment: yup.string().required("Please, your comment!"),
});

const defaultValues = {
  name: "",
  email: "",
  date: "",
  comment: "",
};

const BookingForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), defaultValues });

  const handleSearchBtnSubmit = (values, actions) => {
    console.log(values);
    // ===
    dispatch(closeModal());
  };
  return (
    <form className={css.form} onSubmit={handleSubmit(handleSearchBtnSubmit)}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <label>
        <input
          className={errors.name ? css.inputError : css.input}
          type="text"
          name="name"
          placeholder="Name"
          {...register("name")}
        />
      </label>
      {errors.name && <p className={css.error}>{errors.name.message}</p>}
      <label>
        <input
          className={errors.email ? css.inputError : css.input}
          type="email"
          name="email"
          placeholder="Email"
          {...register("email")}
        />
      </label>
      {errors.email && <p className={css.error}>{errors.email.message}</p>}

      <label>
        <input
          className={errors.date ? css.inputError : css.input}
          type="date"
          name="date"
          placeholder="Booking date"
          {...register("date")}
        />
      </label>
      {errors.date && <p className={css.error}>{errors.date.message}</p>}

      <label>
        <textarea
          className={errors.comment ? css.textareaError : css.textarea}
          name="comment"
          placeholder="Comment"
          {...register("comment")}
        />
      </label>
      {errors.comment && <p className={css.error}>{errors.comment.message}</p>}
      <button className={css.btn} type="submit">
        Send
      </button>
    </form>
  );
};

export default BookingForm;
