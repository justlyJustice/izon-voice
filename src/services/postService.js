import http from "./httpService";

export const getPosts = async () => {
  return await http.get("posts");
};

export const getPost = async (id) => {
  return await http.get(`posts/${id}`);
};

export const getWelcomePageStories = async () => {
  return await http.get("posts/welcome-page-stories");
};

export const getPostsCategory = async (category) => {
  return await http.get(`posts/?category=${category}`);
};

export const likePost = async (id) => {
  return await http.post(`posts/${id}/likes`);
};

export const uploadBlogPost = (value) => {
  const { author, category, description, title, quote, images } = value;

  const formData = new FormData();

  formData.append("author", author);
  formData.append("category", category);
  formData.append("desc", description);
  formData.append("quote", quote);
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
