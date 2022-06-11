/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import PostShare from "components/common/PostShare";

import Header from "components/common/Header";
import Head from "components/common/Head";
import CommentSection from "components/comment/CommentSection";
import LoadingAnimation from "components/common/LoadingAnimation";

import { timeSince } from "utils/helpers";
import { getPost } from "services/postService";
import useApi from "hooks/useApi";

const Blog = () => {
  const [comments, setComments] = useState([]);

  const {
    data: { post },
    loading,
    request,
  } = useApi(getPost);

  const location = useLocation();
  /* location.pathname = "/home"; */
  const { name } = useParams();

  const retrievePost = async () => {
    await request(name);
  };

  useEffect(() => {
    retrievePost();
  }, []);

  return (
    <section>
      <Head title={`Izon Voice| ${post && post.title}`} />
      <LoadingAnimation loading={loading} />

      {post && (
        <>
          <Header />
          <div className="container">
            <div className="blog-section">
              <img src={post.urlToImage || post.image} alt="Blog img" />

              <div className="blog-text-contain">
                <div className="">
                  <h2 className="blog-title">{post.title}</h2>

                  <div className="user-details-contain">
                    <span className="author">
                      <i className="fa-solid fa-user"></i>{" "}
                      {post.author ? post.author : `Boungbai Computers`}
                    </span>

                    <span className="time">
                      <i className="fa-solid fa-calendar"></i>{" "}
                      {timeSince(new Date(post.createdAt || post.publishedAt))}
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
                    {des}
                  </p>
                ))}
              </div>
            </div>

            <CommentSection
              comments={post.comments}
              postId={post._id}
              likes={post.likes}
            />
          </div>

          <PostShare url={window.location.href} />
        </>
      )}
    </section>
  );
};

export default Blog;
