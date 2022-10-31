/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";

import CustomIcon from "components/common/CustomIcon";
import CommentForm from "./CommentForm";

import { likePost, unlikePost } from "services/postService";
import { formateTime } from "utils/helpers";
import useAuth from "hooks/useAuth";
import { toast } from "react-toastify";
import SingleComment from "./SingleComment";
import ReplyForm from "./ReplyForm";

const CommentSection = ({ post, setPost }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [commentId, setCommentId] = useState();
  const [showReply, setShowReply] = useState(false);
  const { user } = useAuth();

  let likedPost = post && post.likes.find((el) => el.user === user && user.id);

  useEffect(() => {
    if (likedPost) {
      setIsLiked(true);
    }
  }, []);

  const handleLike = async (postId) => {
    const res = await likePost(postId);

    if (res.ok) {
      setPost({
        ...post,
        likes: [...post.likes, res.data.data],
      });
      setIsLiked(true);
    }

    if (!res.ok) {
      toast.error(res.data.message);
    }
  };

  const handleUnLike = async (postId) => {
    const orignalLikes = [...post.likes];

    const res = await unlikePost(postId);

    if (res.ok) {
      const likes = post.likes.filter(
        (like) => like._id !== res.data.data.like
      );

      setPost({
        ...post,
        likes,
      });
      setIsLiked(false);
    }

    if (!res.ok) {
      setPost({
        ...post,
        likes: orignalLikes,
      });
    }

    return res;
  };

  const handleShowReply = (commentId) => {
    if (commentId) {
      setShowReply(!showReply);
      setCommentId(commentId);
    }
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
                  <>
                    <ReactTooltip type={user && "success"} />
                    <i
                      data-tip={user ? `Like 👍` : `You need to login to like!`}
                      className={`fa-regular fa-heart icon`}
                      onClick={() => handleLike(post._id)}
                      style={{ cursor: !user && "not-allowed" }}
                    ></i>
                  </>
                ) : (
                  <>
                    <ReactTooltip />
                    <i
                      data-tip={`Unlike 👎`}
                      className={`fa-solid fa-heart liked`}
                      onClick={() => handleUnLike(post._id)}
                    ></i>
                  </>
                )}

                <span className="text">{post && post.likes.length} likes</span>
              </div>
            </div>

            <hr className="comment-rule" />
          </div>

          <div className="single-comment">
            <div className="user_contain">
              <div className="user">
                <div className="icon_container">
                  <CustomIcon />

                  <hr className="user-rule" />
                </div>

                <div className="name-contain">
                  <div>
                    <h2 className="username">James Peremobowei</h2>

                    <p className="comment">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Reprehenderit voluptates tenetur laudantium ab. Maxime
                      labore accusamus, reiciendis ducimus exercitationem
                      pariatur!
                    </p>
                  </div>

                  <div className="reply-div">
                    <span onClick={() => handleShowReply(Math.random(300))}>
                      <i className="fa-solid fa-reply"></i> Reply
                    </span>
                  </div>
                </div>
              </div>

              <div className="time-stamp">
                <span>{formateTime(Date.now())}</span>
              </div>
            </div>

            <ReplyForm
              showReply={showReply}
              key={commentId}
              commentId={commentId}
            />
          </div>

          {post.comments.length > 0 &&
            post.comments.map((comment, i) => (
              <SingleComment comment={comment} key={i} />
            ))}
        </section>
      )}
    </>
  );
};

export default CommentSection;
