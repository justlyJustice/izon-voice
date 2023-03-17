/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { toast } from "react-toastify";

import CommentForm from "./CommentForm";
import SingleComment from "./SingleComment";

import useApi from "hooks/useApi";
import useAuth from "hooks/useAuth";

import logger from "utils/logger";
import commentService from "services/commentService";
import { likePost, unlikePost } from "services/postService";

const CommentSection = ({ post, setPost }) => {
  const [likesCount, setLikesCount] = useState(post && post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const { user } = useAuth();
  const { request: fetchComments, data: comments } = useApi(
    commentService.getComments
  );

  let likedPost = post && user && post.likes.find((el) => el.user === user.id);

  useEffect(() => {
    if (likedPost) {
      setIsLiked(true);
    }

    fetchComments(post._id);
  }, []);

  const handleLike = async (postId) => {
    // Create our initial likes variable
    const initialLikes = likesCount;

    // Increment Likes and setIsLiked to `true`
    setLikesCount((prevCount) => prevCount + 1);
    setIsLiked(true);

    const res = await likePost(postId);

    if (res.ok) {
      logger(res.data.data);
    }

    if (!res.ok) {
      setLikesCount(initialLikes);
      setIsLiked(false);

      toast.error(res.data.message);
    }
  };

  const handleUnLike = async (postId) => {
    const orignalLikes = [...post.likes];
    const initialLikesCount = orignalLikes.length;

    setLikesCount((prevCount) => prevCount - 1);
    setIsLiked(false);

    const res = await unlikePost(postId);

    if (res.ok) {
      const newLikes = post.likes.filter(
        (like) => like._id !== res.data.data.like
      );

      setPost({
        ...post,
        likes: newLikes,
      });
    }

    if (!res.ok) {
      setPost({
        ...post,
        likes: orignalLikes,
      });

      setLikesCount(initialLikesCount);
      setIsLiked(true);
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
                <i className="fa fa-xl fa-comment icon"></i>

                <span className="text">
                  {comments && comments.length} comments
                </span>
              </div>

              <div
                className="item"
                onClick={() =>
                  !isLiked ? handleLike(post._id) : handleUnLike(post._id)
                }
              >
                {!isLiked ? (
                  <>
                    <ReactTooltip />

                    <i
                      data-tip={user ? `Like 👍` : `You need to login to like!`}
                      className={`fa-regular fa-heart fa-xl icon`}
                      style={{ cursor: !user && "not-allowed" }}
                    ></i>
                  </>
                ) : (
                  <>
                    <ReactTooltip />
                    <i
                      data-tip={`Unlike 👎`}
                      className={`fa-solid fa-xl fa-heart liked`}
                    ></i>
                  </>
                )}

                <span className="text">{likesCount} likes</span>
              </div>
            </div>

            <hr className="comment-rule" />
          </div>

          {comments &&
            comments.length > 0 &&
            comments.map((comment) => (
              <SingleComment
                initialComment={comment}
                user={user}
                key={comment._id}
              />
            ))}
        </section>
      )}
    </>
  );
};

export default CommentSection;
