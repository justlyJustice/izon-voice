/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { logo } from "assets/images";

import Card from "components/cards/Card";
import CategoryButtonsSlide from "components/CategoryButtonsSlide";
import Head from "components/common/Head";
import LoadingAnimation from "components/common/LoadingAnimation";
import NoResults from "components/common/NoResults";

import useApi from "../hooks/useApi";
import { getWelcomePageStories } from "services/postService";
import { Btn } from "../styles/loginStyles";

const Main = () => {
  const {
    error,
    data: { posts },
    loading,
    request,
  } = useApi(getWelcomePageStories);

  const loadPosts = async () => {
    await request();
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <>
      <Head title={`Izon Voice | Home`} description="Izon Voice Homepage" />
      <LoadingAnimation loading={loading} />

      <div className="main-grid">
        <div className="left_div">
          <img className="logo" src={logo} alt="Izon voice logo" />

          <div className="top-links-contain" style={{ display: "none" }}>
            <Link to="/login" style={{ color: "rgba(66, 232, 39, 0.7)" }}>
              Login
            </Link>

            <hr />

            <Link to="/register" style={{ color: "rgba(234, 25, 25, 0.7)" }}>
              Register
            </Link>
          </div>
        </div>

        <div className="content_div">
          <div className="cards-contain">
            {posts && posts.length > 0 ? (
              posts.map((post, index) => (
                <Card
                  key={index}
                  image={post.image || post.urlToImage}
                  title={post.title}
                  paraText={post.description}
                  slug={post.slug || post._id}
                />
              ))
            ) : (
              <NoResults />
            )}
          </div>

          <div className="divider"></div>

          <div className="bottom-group">
            <div>
              <p className="more-para">
                MORE STORIES <i className="fa fa-send"></i>
              </p>
            </div>

            <CategoryButtonsSlide />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
