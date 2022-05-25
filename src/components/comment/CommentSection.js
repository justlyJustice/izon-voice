/* eslint-disable no-unused-vars */
import { useState } from "react";
import CustomIcon from "components/common/CustomIcon";
import CommentForm from "./CommentForm";
import { likePost } from "services/postService";
import { timeSince } from "utils/helpers.js";

import useUser from "hooks/useUser";

const CommentSection = ({ postId, comments, likes }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes ? likes.length : 0);

  const { user } = useUser();

  const handleLikePost = async () => {
    try {
      const response = await likePost(postId);
      console.log(response);
    } catch (ex) {
      console.log(ex);
    }
  };

  if (!comments) {
    return null;
  }

  return (
    <section className="comment-section">
      <div className="comment-detail">
        <hr className="comment-rule" />

        <div className="content">
          <div className="item">
            <i className="fa fa-comment icon"></i>

            <span className="text">{comments && comments.length} comments</span>
          </div>

          <div className="item">
            <i
              className={`fa fa-${isLiked ? "heart" : "heart-o"} icon`}
              onClick={handleLikePost}
              style={{ cursor: !user && "not-allowed" }}
            ></i>
            <span className="text">{likesCount} likes</span>
          </div>
        </div>

        <hr className="comment-rule" />
      </div>

      {comments &&
        comments.map((comment, i) => (
          <div className="user_contain" key={i}>
            <div className="user">
              <CustomIcon />

              <div className="name-contain">
                <h2 className="username">{comment.user}</h2>
                <p className="comment">{comment.message}</p>
              </div>
            </div>

            <div className="time-stamp">
              <span>{timeSince(new Date(comment.createdAt))}</span>
            </div>
          </div>
        ))}

      <CommentForm postId={postId} user={user} />
    </section>
  );
};

export default CommentSection;
