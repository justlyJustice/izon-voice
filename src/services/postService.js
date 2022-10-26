import http from "./httpService";

export const getPosts = async () => {
  return await http.get("posts");
};

export const getPost = async (id) => {
  return await http.get(`posts/${id}`);
};

export const getPostsCategory = async (category) => {
  return await http.get(`posts/?category=${category}`);
};

export const likePost = async (postId) => {
  return await http.post(`posts/${postId}/likes/add-like`);
};

export const unlikePost = async (postId) => {
  return await http.post(`posts/${postId}/likes/remove-like`);
};

export const uploadBlogPost = (values) => {
  const { author, category, description, title, images } = values;

  const formData = new FormData();

  formData.append("author", author);
  formData.append("category", category);
  formData.append("desc", description);
  formData.append("title", title);

  for (let i = 0; i < images.length; i++) {
    formData.append("image", images[i]);
  }

  return http.post("posts", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deletePost = (id) => {
  return http.delete(`/posts/${id}`);
};
