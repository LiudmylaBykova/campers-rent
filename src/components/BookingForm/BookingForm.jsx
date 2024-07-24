import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { successToast } from "../../helpers/toast";
import { bookingSchema } from "../../helpers/schemas";
import icon from "../../assets/icons.svg";
import css from "../BookingForm/BookingForm.module.css";

const defaultValues = {
  name: "",
  email: "",
  date: "",
  comment: "",
};

const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(bookingSchema), defaultValues });

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = date ? date.toLocaleDateString("en-GB") : "";
    setValue("date", formattedDate, { shouldValidate: true });
  };

  const handleSearchBtnSubmit = (values) => {
    try {
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
        {errors.date && <p className={css.error}>{errors.date.message}</p>}
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
