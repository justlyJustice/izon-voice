/* eslint-disable import/no-anonymous-default-export */
import Bugsnag from "@bugsnag/js";

const notify = (error) => {
  Bugsnag.notify(error);
};

export default { notify };
