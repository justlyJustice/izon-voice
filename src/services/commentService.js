/* eslint-disable import/no-anonymous-default-export */
import http from "./httpService";

const addReply = (message, commentId) =>
  http.post(`comments/${commentId}/replies`, {
    message,
  });

const createComment = (postId, message) =>
  http.post(`posts/${postId}/comments`, {
    message,
  });

const getComments = (postId) => http.get(`posts/${postId}/comments`);

export default {
  addReply,
  createComment,
  getComments,
};
