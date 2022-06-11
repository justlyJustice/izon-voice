/* eslint-disable no-unused-vars */
import { useState } from "react";
import CustomIcon from "components/common/CustomIcon";
import CommentForm from "./CommentForm";
import { likePost } from "services/postService";
import { timeSince } from "utils/helpers";

import useUser from "hooks/useUser";
import { Link } from "react-router-dom";
import { postReply } from "services/repliesService";

const CommentSection = ({ postId, comments, likes }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes ? likes.length : 0);
  const [showReply, setShowReply] = useState(false);
  const [message, setMessage] = useState("");
  const { user } = useUser();

  const handleLikePost = async () => {
    try {
      const response = await likePost(postId);
      console.log(response);
    } catch (ex) {
      console.log(ex);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (!comments) {
    return null;
  }

  const handleReply = (commentId) => {
    postReply(commentId, message)
      .then((res) => {
        if (res.ok) {
          alert("Successful!");

          console.log(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

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
              className={`fa-solid fa-heart icon`}
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
          <div key={i}>
            <div className="user_contain">
              <div className="user">
                <CustomIcon />

                <div className="name-contain">
                  <div>
                    <h2 className="username">{comment.user}</h2>

                    <p className="comment">{comment.message}</p>
                  </div>

                  <div className="reply">
                    <small>
                      <Link
                        to={`#`}
                        className="reply-link"
                        onClick={() => {
                          setShowReply((prev) => !prev);
                        }}
                      >
                        Reply <i className="fa-solid fa-reply"></i>
                      </Link>
                    </small>
                  </div>

                  {showReply && (
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        style={{ border: "1px solid orange" }}
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                        }}
                      />
                    </form>
                  )}
                </div>
              </div>

              <div className="time-stamp">
                <span>{timeSince(new Date(comment.createdAt))}</span>
              </div>
            </div>
          </div>
        ))}

      <CommentForm postId={postId} user={user} />
    </section>
  );
};

export default CommentSection;
