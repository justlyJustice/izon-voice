/* eslint-disable import/no-anonymous-default-export */
/* import axios from "axios"; */
import { create } from "apisauce";
import { toast } from "react-toastify";

const apiClient = create({
  baseURL: process.env.REACT_APP_API_URL,
  //  headers: {
  //    "x-auth-token": ``
  //  }
});

apiClient.axiosInstance.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    toast.error("An unexpected error occured", {
      autoClose: 3000,
      closeButton: true,
      type: "error",
    });
  }

  return Promise.reject(error);
});

export const setJwt = (jwt) => {
  // apiClient.addAsyncRequestTransform(async (request) => {
  //   if (!jwt) return;

  //   request.headers["x-auth-token"] = jwt;
  // });

  apiClient.headers["x-auth-token"] = jwt;
};
/* 
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    toast.error("An unexpected error occured", {
      autoClose: 3000,
      closeButton: true,
      type: "error",
    });
  }

  return Promise.reject(error);
});

const setJwt = (jwt) => {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}; */

export default {
  get: apiClient.get,
  post: apiClient.post,
  put: apiClient.put,
  delete: apiClient.delete,
  setJwt,
};
