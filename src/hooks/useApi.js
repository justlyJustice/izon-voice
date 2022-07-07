/* eslint-disable no-unused-vars */
import { useState } from "react";

const useApi = (apiFunc) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    if (!response.ok) {
      return setError(true);
    }

    setData(response.data.data);
  };

  return { data, error, loading, request, setData };
};

export default useApi;
