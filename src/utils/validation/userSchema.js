import * as yup from "yup";

export const userRegisterSchema = yup.object().shape({
    username: yup.string().required("Please enter your name"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Please enter your email"),
    password: yup
      .string()
      .min(8, "Password must be eight characters long")
      .max(20, "Password should be between eight and twenty characters long")
      .required("Please Enter your password"),
  });