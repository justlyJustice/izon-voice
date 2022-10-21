import { useState } from "react";
import logger from "utils/logger";
import { getStatus } from "utils/statusCodes";

const useSubmit = (apiFunc) => {
  const [data, setData] = useState({});
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(false);

  const submit = async (redirectTo = "", ...args) => {
    setSubmitting(true);
    const res = await apiFunc(...args);
    setSubmitting(false);

    if (!res.ok) {
      setError(true);
      logger(res);
      setStatus(getStatus(res.problem));

      setTimeout(() => {
        setError(false);
      }, 4000);
    }

    if (res.ok) {
      setSuccess(true);
      setData(res.data);

      setTimeout(() => {
        setSuccess(false);
        window.location.href = redirectTo ? redirectTo : ``;
      }, 4000);
    }

    return res;
  };

  return { data, error, success, submit, submitting, status };
};

export default useSubmit;
