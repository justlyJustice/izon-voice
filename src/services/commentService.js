/* eslint-disable import/no-anonymous-default-export */
import http from "./httpService";

const postComment = (postId, message) =>
  http.post(`posts/${postId}/comments`, {
    message,
  });

export default {
  postComment,
};
