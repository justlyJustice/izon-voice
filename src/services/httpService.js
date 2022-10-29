/* eslint-disable import/no-anonymous-default-export */
import { create } from "apisauce";
import { toast } from "react-toastify";

import baseURL from "config/url";

const apiClient = create({
  baseURL,
});

apiClient.axiosInstance.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    toast.error("Internal server error", {
      autoClose: true,
      closeButton: true,
      type: "error",
    });
  }

  return Promise.reject(error);
});

export const setJwt = (jwt) => {
  apiClient.headers["Authorization"] = "Bearer " + jwt;
};

export default {
  get: apiClient.get,
  post: apiClient.post,
  put: apiClient.put,
  delete: apiClient.delete,
  setJwt,
};
