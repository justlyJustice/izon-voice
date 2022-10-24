/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import CustomIcon from "components/common/CustomIcon";
import CommentForm from "./CommentForm";

import { likePost } from "services/postService";
import { formateTime } from "utils/helpers";
import useUser from "hooks/useUser";

const CommentSection = ({ post, setPost }) => {
  /*   const [likes, setLikes] = useState(post && post.likes); */
  const [shown, setShown] = useState(false);

  const { user } = useUser();

  const handleLike = async () => {
    const res = await likePost(post && post._id);

    console.log(res);

    /* if(res.ok) {
      if(post._id === )
    } */

    /* .then((res) => res.json())
      .then((result) => {
        //   console.log(result)
        const newData = data.map((item) => {
          if (item._id == result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      }); */
  };

  console.log(post);

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
                {/*  {item.likes.includes(state._id) ? (
                  <i
                    className="material-icons"
                    onClick={() => {
                      unlikePost(item._id);
                    }}
                  >
                    thumb_down
                  </i>
                ) : (
                  <i
                    className="material-icons"
                    onClick={() => {
                      likePost(item._id);
                    }}
                  >
                    thumb_up
                  </i>
                )} */}

                {post.likes.find((like) => like.userId === user._id) ? (
                  <i
                    className={`fa-solid fa-heart icon`}
                    onClick={() => console.log(`Unlike`)}
                    /*   style={{ cursor: !user && "not-allowed" }} */
                  ></i>
                ) : (
                  <i
                    className={`fa-regular fa-heart icon`}
                    onClick={() => handleLike()}
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
