/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Linkify from "linkify-react";

import Header from "components/common/Header";
import Head from "components/common/Head";
import CommentSection from "components/comment/CommentSection";
import PostShare from "components/common/PostShare";
import LoadingAnimation from "components/common/LoadingAnimation";

import { formateTime } from "utils/helpers";
import { getPost } from "services/postService";
import useApi from "hooks/useApi";

const Blog = () => {
  const {
    data: post,
    loading,
    request: retrievePost,
    setData: setPost,
  } = useApi(getPost);

  const { name } = useParams();

  useEffect(() => {
    retrievePost(name);
  }, []);

  return (
    <section>
      <Head title={`Izon Voice | ${post && post.title}`} />
      <LoadingAnimation loading={loading} />

      {post ? (
        <>
          <Header />
          <div className="container">
            <div className="blog-section">
              <div className="blog-image-contain">
                <img src={post.urlToImage || post.image} alt="Blog img" />
              </div>

              <div className="blog-text-contain">
                <div>
                  <h2 className="blog-title">{post.title}</h2>

                  <div className="user-details-contain">
                    <span className="author">
                      <i className="fa-solid fa-user"></i>
                      {post.author}
                    </span>

                    <span className="time">
                      <i className="fa-solid fa-calendar"></i>{" "}
                      {formateTime(post.createdAt)}
                    </span>

                    <span className="category">
                      <i className="fa-brands fa-instalod"></i>{" "}
                      {post.category
                        ? post.category.toUpperCase()
                        : "Trending News"}
                    </span>
                  </div>

                  {post.quote && (
                    <div className="quote-div">
                      <h3 className="quote">
                        <span className="quote-sign">"</span>
                        {post.quote}
                        <span className="quote-sign">"</span>
                      </h3>
                    </div>
                  )}
                </div>
              </div>

              <div className="blog-content">
                {post.description.split("\n").map((des, i) => (
                  <p className="para" key={i}>
                    <Linkify>{des}</Linkify>
                  </p>
                ))}
              </div>
            </div>

            <CommentSection post={post} setPost={setPost} />
          </div>

          <PostShare url={window.location.href} />
        </>
      ) : null}
    </section>
  );
};

export default Blog;
