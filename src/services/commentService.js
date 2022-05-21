/* eslint-disable import/no-anonymous-default-export */
import http from "./httpService";

const postComment = (postId, message) => {
  return http.post(`posts/${postId}/comments`, {
    message: message,
  });
};

export default {
  postComment,
};
