/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import BlogCarousel from "components/BlogCarousel";
import Header from "components/common/Header";
import Icon from "components/common/Icon";
import { Link } from "react-router-dom";

import { getPosts } from "services/postService";
import useApi from "hooks/useApi";
import LoadingAnimation from "components/common/LoadingAnimation";
import Head from "components/common/Head";
import { formateTime } from "utils/helpers";

const Blogs = () => {
  const {
    data: { posts },
    error,
    loading,
    request: retrievePosts,
  } = useApi(getPosts);

  useEffect(() => {
    retrievePosts();
  }, []);

  if (error) {
    return (
      <div>
        <h3>Error getting the posts!</h3>
        <button className="btn" onClick={() => retrievePosts()}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <>
      <section>
        <Head
          title="Izon Voice | Blog"
          description="Return right in and hear from some cool voices around the globe"
        />
        <LoadingAnimation loading={loading} />
        <Header />
        <div className="container">
          <div className="carousel_contain">
            <BlogCarousel posts={posts} />
          </div>

          <div className="news_feed_contain">
            <div className="head">
              <h2>NEWS FEED</h2>

              <hr />
            </div>

            <div className="body">
              <div className="section1">
                {posts &&
                  posts.length > 0 &&
                  posts.slice(10, 16).map((post, i) => (
                    <Link to={`/${post.slug}`}>
                      <div className="div1" key={i}>
                        <div className="div1-image-contain">
                          <img src={post.urlToImage} alt="Item pic" />
                        </div>

                        <div className="text-div">
                          <div className="text-group-one">
                            <span className="first-span">
                              {post.category.toUpperCase()}
                            </span>

                            <i
                              className="fa fa-circle fa-sm"
                              style={{ color: "#c4c4c4", fontSize: "8px" }}
                            ></i>

                            <span className="second-span">
                              {formateTime(post.createdAt)}
                            </span>
                          </div>

                          <p className="blog-title">
                            {post.title.toUpperCase()}
                          </p>

                          <div className="tags-contain">
                            <span className="comment-contain">
                              <Icon
                                name="comment"
                                style={{
                                  color: "#C4C4C4",
                                  fontSize: "12px",
                                }}
                              />{" "}
                              <small>{post.comments.length}</small>
                            </span>

                            <span className="comment-contain">
                              <Icon
                                name="heart"
                                style={{
                                  color: "#C4C4C4",
                                  fontSize: "12px",
                                }}
                              />

                              <small>{posts.likes}</small>
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>

              <div className="section2">
                <div className="top-trend-text">
                  <p>
                    TRENDING <i className="fa-solid fa-arrow-trend-up"></i>
                  </p>
                </div>

                <div className="trends-container">
                  {posts &&
                    posts.length > 0 &&
                    posts
                      .filter((post) => post._id === "62b4cdaec10f2800dbe62cd1")
                      .map((post) => (
                        <div className="trend" key={post._id}>
                          <Link to={`/${post.slug}`}>
                            <div className="trend-pic-contain">
                              <img src={post.urlToImage} alt="Trend pic" />
                            </div>

                            <p className="trend-text">{post.title}</p>
                          </Link>
                        </div>
                      ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
