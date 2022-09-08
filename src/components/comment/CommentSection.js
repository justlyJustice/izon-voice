/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import CustomIcon from "components/common/CustomIcon";
import CommentForm from "./CommentForm";

import { likePost } from "components/services/postService";
import { formateTime } from "utils/helpers";
import useUser from "hooks/useUser";

const CommentSection = ({ post, setPost }) => {
  const elementRef = useRef();
  const [likes, setLikes] = useState(post && post.likes);
  const { user } = useUser();
  const [shown, setShown] = useState(false);

  const handleLike = async () => {
    const res = await likePost(post && post.id);
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
                <i
                  className={`fa-solid fa-heart icon`}
                  style={{ cursor: !user && "not-allowed" }}
                ></i>
                <span className="text">{likes} likes</span>
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
