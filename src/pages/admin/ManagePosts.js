/* eslint-disable react-hooks/exhaustive-deps */
/*  */
/* eslint-disable no-unused-vars */
import { toast } from "react-toastify";

import DashboardWrapper from "components/admin/Wrapper";
import useApi from "hooks/useApi";
import { deletePost, getPosts } from "services/postService";
import { useEffect } from "react";

import LoadingPlaceHolder from "components/common/LoadingPlaceHolder";

const ManagePosts = () => {
  const { loading, data: posts, request, setData: setPosts } = useApi(getPosts);

  useEffect(() => {
    request();
  }, []);

  const handleDelete = async (id) => {
    const originalPosts = [...posts];
    setPosts(posts.filter((post) => post._id !== id));

    const res = await deletePost(id);

    if (res.ok) {
      toast.success(`Post with title ${res.data.post.title} has been deleted.`);
    }

    if (!res.ok) {
      toast.error(`${res.data.message}`);
      return setPosts(originalPosts);
    }
  };

  return (
    <DashboardWrapper topText={`Manage existing blog posts .`}>
      {loading ? (
        <>
          <div className="pst-contain">
            <LoadingPlaceHolder extraStyles={{ height: `100%` }} />
          </div>

          <div className="pst-contain">
            <LoadingPlaceHolder extraStyles={{ height: `100%` }} />
          </div>

          <div className="pst-contain">
            <LoadingPlaceHolder extraStyles={{ height: `100%` }} />
          </div>

          <div className="pst-contain">
            <LoadingPlaceHolder extraStyles={{ height: `100%` }} />
          </div>

          <div className="pst-contain">
            <LoadingPlaceHolder extraStyles={{ height: `100%` }} />
          </div>
        </>
      ) : (
        <div>
          {posts && posts.length > 0 ? (
            posts.map((post) => (
              <div className="pst-contain" key={post._id}>
                <div className="icon-contain">
                  <i className="fa-solid fa-clone"></i>
                </div>

                <p className="pst-title">{post.title}</p>

                <div className="buttons-contain">
                  <button
                    className="btn dlt"
                    onClick={() => handleDelete(post._id)}
                  >
                    Delete <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h2>No Posts!</h2>
          )}
        </div>
      )}
    </DashboardWrapper>
  );
};

export default ManagePosts;
