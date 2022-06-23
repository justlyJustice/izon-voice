/* eslint-disable import/no-anonymous-default-export */
import { create } from "apisauce";
import { toast } from "react-toastify";
import cache from "utils/cache";

const apiClient = create({
  baseURL: process.env.REACT_APP_API_URL,
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
  apiClient.headers["x-auth-token"] = jwt;
};

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default {
  get,
  post: apiClient.post,
  put: apiClient.put,
  delete: apiClient.delete,
  setJwt,
};
