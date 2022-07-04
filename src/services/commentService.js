/* eslint-disable import/no-anonymous-default-export */
import http from "./httpService";

const postComment = (postId, desc) =>
  http.post(`posts/${postId}/comments`, {
    desc,
  });

export default {
  postComment,
};
