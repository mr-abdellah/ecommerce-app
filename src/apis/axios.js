import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const axiosInstance = axios.create({
  baseURL: "http://192.168.79.134:8000",
  responseType: "json",
});

axiosInstance.interceptors.request.use(
  async (config) => {
    if (config.headers) {
      await AsyncStorage.getItem("ecommerce_app").then((res) => {
        config.headers.Authorization = res;
      });
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
