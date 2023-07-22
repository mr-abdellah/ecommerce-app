import axiosInstance from "../axios";

const loginUserApi = async (data) => {
  return await axiosInstance.post("/login", data);
};

const registerUserApi = async (data) => {
  return await axiosInstance.post("/register", data);
};

const forgetPasswordApi = async (data) => {
  return await axiosInstance.post("/forget_password", data);
};

const resetPasswordApi = async (data) => {
  return await axiosInstance.post("/reset_password", data);
};

export { loginUserApi, forgetPasswordApi, resetPasswordApi, registerUserApi };
