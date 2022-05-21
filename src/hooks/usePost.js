import { useState } from "react";

const usePost = (apiFunc) => {
  const [data, setData] = useState();

  const post = (...args) => {
    apiFunc(...args);
  };
};

export default usePost;
