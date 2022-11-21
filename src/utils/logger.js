/* eslint-disable import/no-anonymous-default-export */
import LogRocket from "logrocket";

const logger = (...params) => {
  process.env.NODE_ENV === "development"
    ? console.log(...params)
    : LogRocket.log(...params);
};

export default logger;
