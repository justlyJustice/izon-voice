import { useState } from "react";
import logger from "utils/logger";

const useSubmit = (apiFunc) => {
  const [data, setData] = useState({});
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const submit = async (...args) => {
    setSubmitting(true);
    const res = await apiFunc(...args);
    setSubmitting(false);

    if (!res.ok) {
      setError(true);

      logger(res);

      setTimeout(() => {
        setError(false);
      }, 5000);
    }

    setSuccess(true);
    setData(res.data);

    return res;
  };

  return { success, error, submit, submitting, data };
};

export default useSubmit;
