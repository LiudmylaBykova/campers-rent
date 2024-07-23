import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { closeModal } from "../../redux/modal/slice";
import css from "../BookingForm/BookingForm.module.css";
import icon from "../../assets/icons.svg";
import { successToast } from "../../helpers/toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const schema = yup.object().shape({
  name: yup.string().required("Please, enter your name!"),
  email: yup.string().required("Please, enter your email!"),
  date: yup
    .string()
    .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/)
    .required("Please, choose the date in format 00.00.0000!"),
  comment: yup.string(),
});

const defaultValues = {
  name: "",
  email: "",
  date: "",
  comment: "",
};

const BookingForm = () => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(null);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), defaultValues });

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = date ? date.toLocaleDateString("en-GB") : "";
    setValue("date", formattedDate, { shouldValidate: true });
  };

  const handleSearchBtnSubmit = (values) => {
    try {
      dispatch(closeModal());
      successToast(
        "Your request was sussesfully sended! Our manager will connect with you!"
      );
    } catch (error) {
      console.log(error.message);
    }
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
      <div className={css.labelDatePicker}>
        <label>
          <DatePicker
            name="date"
            selected={selectedDate}
            onChange={handleDateChange}
            placeholderText="Booking date"
            dateFormat="dd.MM.yyyy"
            className={
              errors.date ? css.inputDatePickerError : css.inputDatePicker
            }
          />
          <svg className={css.svgDatePicker} width="20" height="20">
            <use href={`${icon}#icon-calendar`}></use>
          </svg>
        </label>
        {errors.date && (
          <p className={css.error}>
            {"Please, choose the date in format 00.00.0000!"}
          </p>
        )}
      </div>
      <label>
        <textarea
          className={css.textarea}
          name="comment"
          placeholder="Comment"
          {...register("comment")}
        />
      </label>
      <button className={css.btn} type="submit">
        Send
      </button>
    </form>
  );
};

export default BookingForm;
