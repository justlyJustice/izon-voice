/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Linkify from "linkify-react";
import ReactModal from "react-modal";

import Header from "components/common/Header";
import Head from "components/common/Head";
import CommentSection from "components/comment/CommentSection";
import PostShare from "components/common/PostShare";
import LoadingAnimation from "components/common/LoadingAnimation";

import {
  formateTime,
  splitDescriptionToFour,
  splitDescToFour,
} from "utils/helpers";
import { getPost } from "services/postService";
import useApi from "hooks/useApi";
import { adImageOne, treasuresColdRoom } from "assets/images";

const Post = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const { name } = useParams();
  const navigate = useNavigate();

  function openModal(imgUrl) {
    setIsModalOpen(true);
    setImageUrl(imgUrl);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  ReactModal.setAppElement("#root");

  const {
    data: post,
    loading,
    request: retrievePost,
    setData: setPost,
  } = useApi(getPost);

  useEffect(() => {
    retrievePost(name);
  }, []);

  const description = splitDescriptionToFour(post);
  const desc = splitDescToFour(post);

  return (
    <section>
      <style>
        {`
          .modal {
            width: 400px;
            height: fit-content;
            background-color: white;
            padding: 20px 20px;
          }

          .overlay {
            align-items: center;
            display: flex;
            justify-content: center;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.25);
          }

          .close {
            display: flex;
            justify-content: flex-end;
            color: #dbdbdb;
            cursor: pointer;
            font-size: 30px;
          }

          .modal-pic {
            object-fit: contain;
            height: auto;
            width: 100%;
          }
        `}
      </style>

      <Head title={`Izon Voice | ${post && post.title}`} />
      <LoadingAnimation loading={loading} />

      <Header />
      {post && (
        <>
          <div className="container">
            <div className="blog-section">
              <div className="blog-image-contain">
                <img src={post.urlToImage || post.images[0]} alt="Post img" />
              </div>

              <div className="blog-text-contain">
                <div>
                  <h2 className="blog-title">{post.title}</h2>

                  <div className="user-details-contain">
                    <span className="author">
                      <i className="fa-solid fa-user"></i>{" "}
                      {post.author ? post.author : "AWUDUMAPU JOEL IRENE"}
                    </span>

                    <span className="time">
                      <i className="fa-solid fa-calendar"></i>{" "}
                      {formateTime(post.createdAt)}
                    </span>

                    <span className="category">
                      <i className="fa-brands fa-instalod"></i>{" "}
                      {post.category.toUpperCase()}
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
                <ReactModal
                  className={`modal`}
                  isOpen={isModalOpen}
                  onRequestClose={closeModal}
                  contentLabel="Image Modal"
                  overlayClassName={`overlay`}
                >
                  <i
                    className="fa-solid fa-xmark close"
                    onClick={() => closeModal()}
                  ></i>

                  {imageUrl && (
                    <img className="modal-pic" src={imageUrl} alt="Modal Pic" />
                  )}
                </ReactModal>
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
                    <a href="#" onClick={() => openModal(adImageOne)}>
                      <img
                        className="ad-image"
                        src={adImageOne}
                        alt={adImageOne}
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

                  <div className="ad-contain">
                    <a href="#" onClick={() => openModal(treasuresColdRoom)}>
                      <img
                        className="ad-image"
                        src={treasuresColdRoom}
                        alt={treasuresColdRoom}
                      />
                    </a>
                  </div>

                  {(description &&
                    description[2].map((des, i) => (
                      <p className="para" key={i}>
                        <Linkify>{des}</Linkify>
                      </p>
                    ))) ||
                    (desc &&
                      desc[2].map((des, i) => (
                        <p className="para" key={i}>
                          <Linkify>{des}</Linkify>
                        </p>
                      )))}

                  <div className="ad-contain">
                    <a href="#" onClick={() => openModal(adImageOne)}>
                      <img
                        className="ad-image"
                        src={adImageOne}
                        alt={adImageOne}
                      />
                    </a>
                  </div>

                  {(description &&
                    description[3].map((des, i) => (
                      <p className="para" key={i}>
                        <Linkify>{des}</Linkify>
                      </p>
                    ))) ||
                    (desc &&
                      desc[3].map((des, i) => (
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

export default Post;
