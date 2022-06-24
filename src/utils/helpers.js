import moment from "moment";

export function formateTime(time) {
  return moment(time).fromNow();
}
