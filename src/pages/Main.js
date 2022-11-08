/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

import { logo } from "assets/images";

import Card from "components/cards/Card";
import CategoryButtonsSlide from "components/CategoryButtonsSlide";
import Head from "components/common/Head";
import LoadingAnimation from "components/common/LoadingAnimation";

import useApi from "hooks/useApi";

import { getPosts } from "services/postService";
import Footer from "components/Footer";
import useAuth from "hooks/useAuth";
import ErrorBoundary from "components/ErrorBoundaryComponent";
import { toast } from "react-toastify";

const Main = () => {
  const {
    error,
    data: posts,
    loading,
    request: retrievePosts,
  } = useApi(getPosts);
  const { user } = useAuth();

  useEffect(() => {
    retrievePosts(`?limit=${3}`);
  }, []);

  if (error) {
    return <ErrorBoundary />;
  }

  return (
    <>
      <Head title={`Izon Voice | Home`} description="Izon Voice Homepage" />
      <LoadingAnimation loading={loading} />

      <div className="main-grid">
        <div className="left_div">
          <img className="logo" src={logo} alt="Izon voice logo" />
        </div>

        <div className="content_div">
          <div className="top-links-contain">
            {user ? (
              <Link
                to="#"
                className="link"
                style={{ color: "rgba(234, 25, 25, 0.7)" }}
              >
                <i className="fa-solid fa-user"></i> {user.name}
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="link"
                  style={{ color: "rgba(66, 232, 39, 0.7)" }}
                >
                  Login
                </Link>

                <hr className="rule" />

                <Link
                  to="/register"
                  className="link"
                  style={{ color: "rgba(234, 25, 25, 0.7)" }}
                >
                  Register
                </Link>
              </>
            )}
          </div>

          <div className="cards-contain">
            {posts &&
              posts.length > 0 &&
              posts
                .slice(0, 3)
                .map((post, index) => (
                  <Card
                    key={index}
                    image={post.urlToImage || post.images[0]}
                    title={post.title}
                    paraText={post.description || post.desc}
                    slug={post.slug}
                  />
                ))}
          </div>

          <div className="divider"></div>

          <div className="bottom-group">
            <div>
              <p className="more-para">
                MORE STORIES <i className="fa-solid fa-paper-plane"></i>
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
