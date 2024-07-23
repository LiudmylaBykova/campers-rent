import * as yup from "yup";

export const bookingSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Please, enter your name, min 2 characters!")
    .required(),
  email: yup
    .string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Please, enter email user@gmail.com!"
    )
    .required(),
  date: yup
    .string()
    .matches(
      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/,
      "Please, choose the date in format 00.00.0000!"
    )
    .required(),
  comment: yup.string(),
});
