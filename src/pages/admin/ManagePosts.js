/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

import DashboardWrapper from "components/admin/Wrapper";
import useApi from "hooks/useApi";
import { deletePost, getPosts } from "services/postService";
import { useEffect } from "react";
import LoadingAnimation from "components/common/LoadingAnimation";

const ManagePosts = () => {
  const { loading, data: posts, request, setPosts } = useApi(getPosts);

  useEffect(() => {
    request();
  }, []);

  const handleDelete = async (id) => {
    const originalPosts = [...posts];
    setPosts(posts.filter((post) => post._id !== id));

    const res = await deletePost(id);
    if (res.ok) {
      alert(`Post has been deleted.`);
    }

    alert(`Could not delete post!`);
    return setPosts(originalPosts);
  };

  const handleEdit = (id) => {};

  if (loading) return <LoadingAnimation loading={loading} />;

  return (
    <DashboardWrapper topText={`Manage existing blog posts.`}>
      {posts &&
        posts.length > 0 &&
        posts.map((post) => (
          <Link className="pst-contain" to={`/${post.slug}`}>
            <p className="pst-title">{post.title}</p>

            <div className="buttons-contain">
              <button className="btn edit">Edit</button>
              <button
                className="btn dlt"
                onClick={() => handleDelete(post._id)}
              >
                Delete
              </button>
            </div>
          </Link>
        ))}
    </DashboardWrapper>
  );
};

export default ManagePosts;
