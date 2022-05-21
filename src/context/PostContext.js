import React from "react";

export const PostContext = React.createContext();

const PostProvider = ({ children }) => {
  const [post, setPost] = React.useState();

  return (
    <PostContext.Provider value={[post, setPost]}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
