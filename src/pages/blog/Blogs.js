/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { markusSpiske, kateTrysh, huntersRace } from "../../assets/images";
import BlogCarousel from "../../components/BlogCarousel";
import Header from "../../components/common/Header";
import Icon from "../../components/common/Icon";

import { getPosts } from "../../services/postService";
import useApi from "../../hooks/useApi";
import LoadingAnimation from "../../components/common/LoadingAnimation";
import Head from "../../components/common/Head";
import ErrorBoundaryComponent from "../../components/ErrorBoundaryComponent";

const Blogs = () => {
  const {
    data: { posts },
    loading,
    request: retrievePosts,
  } = useApi(getPosts);

  useEffect(() => {
    retrievePosts();
  }, []);

  return (
    <ErrorBoundaryComponent
      onError={(error, errorInfo) => {
        console.log(error, errorInfo);
      }}
    >
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
                <div className="div1">
                  <img src={markusSpiske} alt="Item pic" />
                  <div className="text-div">
                    <div className="text-group-one">
                      <span className="first-span">HEALTH</span>
                      <i
                        className="fa fa-circle fa-sm"
                        style={{ color: "#c4c4c4", fontSize: "8px" }}
                      ></i>
                      <span className="second-span">1 hour ago</span>
                    </div>
                    <p className="blog-title">What would have been told!</p>
                    <p className="blog-para">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed nulla risus, finibus
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
                        <small>13</small>
                      </span>
                      <span className="comment-contain">
                        <Icon
                          name="heart"
                          style={{
                            color: "#C4C4C4",
                            fontSize: "12px",
                          }}
                        />{" "}
                        <small>25</small>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="div1">
                  <img src={markusSpiske} alt="Item pic" />
                  <div className="text-div">
                    <div className="text-group-one">
                      <span className="first-span">HEALTH</span>
                      <i
                        className="fa fa-circle fa-sm"
                        style={{ color: "#c4c4c4", fontSize: "8px" }}
                      ></i>
                      <span className="second-span">1 hour ago</span>
                    </div>
                    <p className="blog-title">What would have been told!</p>
                    <p className="blog-para">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed nulla risus, finibus
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
                        <small>13</small>
                      </span>
                      <span className="comment-contain">
                        <Icon
                          name="heart"
                          style={{
                            color: "#C4C4C4",
                            fontSize: "12px",
                          }}
                        />{" "}
                        <small>25</small>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section2">
                <div className="top-trend-text">
                  <p>
                    TRENDING <i className="fa-solid fa-arrow-trend-up"></i>{" "}
                  </p>
                </div>
                <div className="trends-container">
                  <div className="trend">
                    <img src={kateTrysh} alt="Trend pic" />
                    <p className="trend-text">
                      43 habits that makes us physically strong
                    </p>
                  </div>
                  <div className="trend">
                    <img src={huntersRace} alt="Trend pic" />
                    <p className="trend-text">
                      Techniques for being a successful entrepreneur
                    </p>
                  </div>
                  <div className="trend">
                    <img src={kateTrysh} alt="Trend pic" />
                    <p className="trend-text">
                      43 habits that makes us physically strong
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ErrorBoundaryComponent>
  );
};

export default Blogs;
