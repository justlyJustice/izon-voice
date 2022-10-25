/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import CustomIcon from "components/common/CustomIcon";
import CommentForm from "./CommentForm";

import { likePost } from "services/postService";
import { formateTime } from "utils/helpers";
import useAuth from "hooks/useAuth";

const CommentSection = ({ post, setPost }) => {
  /*   const [likes, setLikes] = useState(post && post.likes); */
  const [shown, setShown] = useState(false);
  const [isLiked, setIsLiked] = useState(post && post.likes);

  const { user } = useAuth();

  const handleLike = async (postId) => {
    const res = await likePost(postId);

    if (res.ok) {
      if (res.data !== null) {
        setPost({
          ...post,
          likes: [...post.likes, res.data],
        });
        setIsLiked(true);
      }

      if (res.data === null) {
        setPost({
          ...post,
          likes: post.likes.filter((like) => like._id !== res.data._id),
        });
        setIsLiked(false);
      }
    }

    return res;
  };

  return (
    <>
      {post && (
        <section className="comment-section">
          <CommentForm post={post} user={user} setPost={setPost} />

          <div className="comment-detail">
            <hr className="comment-rule" />

            <div className="content">
              <div className="item">
                <i className="fa fa-comment icon"></i>

                <span className="text">{post.comments.length} comments</span>
              </div>

              <div className="item">
                {!isLiked ? (
                  <i
                    className={`fa-solid fa-heart icon`}
                    onClick={() => handleLike(post._id)}
                  ></i>
                ) : (
                  <i
                    className={`fa-regular fa-heart liked`}
                    onClick={() => handleLike(post._id)}
                    style={{ cursor: !user && "not-allowed" }}
                  ></i>
                )}

                <span className="text">{post && post.likes.length} likes</span>
              </div>
            </div>

            <hr className="comment-rule" />
          </div>

          {post.comments.length > 0 &&
            post.comments.map((comment, i) => (
              <div className="user_contain" key={i}>
                <div className="user">
                  <div className="icon_container">
                    <i className="fa-solid fa-user"></i>

                    <hr className="user-rule" />
                  </div>

                  <div className="name-contain">
                    <div>
                      <h2 className="username">{comment.user}</h2>

                      <p className="comment">
                        {comment.desc || comment.message}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="time-stamp">
                  <span>{formateTime(comment.createdAt)}</span>
                </div>
              </div>
            ))}
        </section>
      )}
    </>
  );
};

export default CommentSection;
