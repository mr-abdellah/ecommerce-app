import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});
export const RegisterSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  full_name: yup.string().required("Full name is required"),
  password: yup.string().required("Password is required"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Password must match !")
    .required("Confirm your password"),
});
