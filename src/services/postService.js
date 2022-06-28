import http from "./httpService";

// GET REQUESTS
export const getPosts = async () => {
  return await http.get("posts");
};

export const getPost = async (id) => {
  return await http.get(`posts/${id}`);
};

export const getWelcomePageStories = async () => {
  return await http.get("posts/welcome-page-stories");
};

export const getTrendingPosts = async () => await http.get("/trending");

export const getPostsCategory = async (category) => {
  return await http.get(`posts/?category=${category}`);
};

// POST REQUESTS
export const likePost = async (id) => {
  return await http.post(`posts/${id}/likes`);
};

export const uploadBlogPost = (value) => {
  const formData = new FormData();

  formData.append("author", value.author);
  formData.append("category", value.category);
  formData.append("description", value.description);
  formData.append("file", value.file);
  formData.append("quote", value.quote);
  formData.append("title", value.title);

  return http.post("posts", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
