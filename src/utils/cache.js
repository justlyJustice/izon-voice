/* eslint-disable import/no-anonymous-default-export */
import moment from "moment";

const prefix = "cache ";
const expiryInMinutes = 5;

const store = (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };

    localStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const isExpired = (item) => {
  const now = moment(Date.now());
  const storedTime = moment(item.timestamp);
  return now.diff(storedTime, "minutes") > expiryInMinutes;
};

const get = (key) => {
  try {
    const value = localStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpired(item)) {
      localStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  } catch (error) {
    console.log(error);
  }
};

export default {
  get,
  store,
};
