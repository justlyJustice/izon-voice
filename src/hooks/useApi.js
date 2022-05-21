import { useState } from "react";

const useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const request = async (...args) => {
    try {
      setLoading(true);
      const response = await apiFunc(...args);
      setLoading(false);

      return setData(response.data);
    } catch (ex) {
      return setError(true);
    }
  };

  return { data, error, loading, request };
};

export default useApi;
