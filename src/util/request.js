//@ts-nocheck
import axios from "axios";
import Cookie from "js-cookie";

const baseURL = "";
const requestTimeout = 60 * 1000;
const instance = axios.create({
  baseURL,
  timeout: requestTimeout,
  withCredentials: true, // send cookies when cross-domain requests
  headers: {
    "Content-Type": "application/json;charset=UTF-8"
  }
});

instance.interceptors.request.use(
  config => {
    config.headers = {
      ...config.headers,
      device: "h5",
      version: "1.0.0",
      token: Cookie.get("DstClient-Token") || "7192383480a14ae7ade1e7b77898fb37"
    };
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  response => {
    const res = response.data;
    if (response.status === 200) {
      return Promise.resolve(res);
    } else {
      return Promise.reject(res || "error");
    }
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
