/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { toast } from "react-toastify";

import { likePost, unlikePost } from "services/postService";
import CommentForm from "./CommentForm";
import useAuth from "hooks/useAuth";
import SingleComment from "./SingleComment";
import useApi from "hooks/useApi";
import commentService from "services/commentService";

const CommentSection = ({ post, setPost }) => {
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

                <span className="text">
                  {comments && comments.length} comments
                </span>
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

          {comments &&
            comments.length > 0 &&
            comments.map((comment) => (
              <SingleComment initialComment={comment} key={comment._id} />
            ))}
        </section>
      )}
    </>
  );
};

export default CommentSection;
