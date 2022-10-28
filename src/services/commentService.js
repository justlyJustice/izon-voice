/* eslint-disable import/no-anonymous-default-export */
import http from "./httpService";

const postComment = (postId, desc) =>
  http.post(`posts/${postId}/comments`, {
    desc,
  });

const addReply = (commentId, message) =>
  http.post(`comments/${commentId}/replies`, {
    message,
  });

export default {
  addReply,
  postComment,
};
