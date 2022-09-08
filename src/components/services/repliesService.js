import http from "./httpService";

export const postReply = (commentId, message) => {
  return http.post(`/${commentId}/replies`, {
    message,
  });
};
