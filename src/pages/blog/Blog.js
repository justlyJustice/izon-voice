/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Linkify from "linkify-react";

import Header from "components/common/Header";
import Head from "components/common/Head";
import CommentSection from "components/comment/CommentSection";
import PostShare from "components/common/PostShare";
import LoadingAnimation from "components/common/LoadingAnimation";

import { formateTime } from "utils/helpers";
import { getPost } from "services/postService";
import useApi from "hooks/useApi";
import { adImageOne, adImageTwo } from "assets/images";

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

  const splitDesc = () => {
    if (post && post.desc) {
      const array = post.desc.split("\n");

      const middleIndex = Math.ceil(array.length / 2);

      const firstHalf = array.splice(0, middleIndex);
      const secondHalf = array.splice(-middleIndex);

      let obj = { firstHalf, secondHalf };

      let objectKeys = Object.keys(obj);

      return objectKeys.map((i) => obj[i]);
    }

    return null;
  };

  const splitDescription = () => {
    if (post && post.description) {
      const array = post.description.split("\n");

      const middleIndex = Math.ceil(array.length / 2);

      const firstHalf = array.splice(0, middleIndex);
      const secondHalf = array.splice(-middleIndex);

      let obj = { firstHalf, secondHalf };

      let objectKeys = Object.keys(obj);

      return objectKeys.map((i) => obj[i]);
    }

    return null;
  };

  const description = splitDescription();
  const desc = splitDesc();

  return (
    <section>
      <Head title={`Izon Voice | ${post && post.title}`} />
      <LoadingAnimation loading={loading} />

      {post && (
        <>
          <Header />
          <div className="container">
            <div className="blog-section">
              <div className="blog-image-contain">
                <img
                  /*  className="top-image" */
                  src={post.urlToImage || post.images[0]}
                  alt="Blog img"
                />
              </div>

              <div className="blog-text-contain">
                <div>
                  <h2 className="blog-title">{post.title}</h2>

                  <div className="user-details-contain">
                    <span className="author">
                      <i className="fa-solid fa-user"></i>{" "}
                      {post.author ? post.author : "A. T. Francis"}
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
                <>
                  {(description &&
                    description[0].map((des, i) => (
                      <p className="para" key={i}>
                        <Linkify>{des}</Linkify>
                      </p>
                    ))) ||
                    (desc &&
                      desc[0].map((des, i) => (
                        <p className="para" key={i}>
                          <Linkify>{des}</Linkify>
                        </p>
                      )))}

                  <div className="ad-contain">
                    <a href={`/2.jpeg`} target={`_blank`}>
                      <img
                        className="ad-image"
                        src={adImageOne}
                        alt={adImageOne}
                      />
                    </a>

                    <a href={`/3.jpeg`} target={`_blank`}>
                      <img
                        className="ad-image"
                        src={adImageTwo}
                        alt={adImageTwo}
                      />
                    </a>
                  </div>

                  {(description &&
                    description[1].map((des, i) => (
                      <p className="para" key={i}>
                        <Linkify>{des}</Linkify>
                      </p>
                    ))) ||
                    (desc &&
                      desc[1].map((des, i) => (
                        <p className="para" key={i}>
                          <Linkify>{des}</Linkify>
                        </p>
                      )))}
                </>
              </div>
            </div>

            <CommentSection post={post} setPost={setPost} />
          </div>

          <PostShare url={window.location.href} />
        </>
      )}
    </section>
  );
};

export default Blog;
