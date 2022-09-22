/* eslint-disable import/no-anonymous-default-export */
import Bugsnag from "@bugsnag/js";

const logger = (error) => {
  process.env.NODE_ENV === "development"
    ? console.log(error)
    : Bugsnag.notify(error);
};

export default logger;
