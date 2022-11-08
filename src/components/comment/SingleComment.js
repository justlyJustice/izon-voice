/* eslint-disable no-unused-vars */
import { useState } from "react";
import ReactTooltip from "react-tooltip";
import { Comment } from "antd";

import "antd/dist/antd.css";

import { formateTime } from "utils/helpers";
import CustomIcon from "components/common/CustomIcon";
import ReplyForm from "./ReplyForm";
import SingleReply from "./SingleReply";

const SingleComment = ({ user, initialComment }) => {
  const [comment, setComment] = useState(initialComment);

  const [openReply, setOpenReply] = useState(false);

  const showReply = () => {
    setOpenReply(!openReply);
  };

  const action = [
    <span
      data-tip={user ? `Reply` : `You need to login to reply!`}
      onClick={showReply}
      style={{ cursor: !user && `none` }}
      className={`reply-link`}
    >
      <ReactTooltip />
      Reply
    </span>,
  ];

  return (
    <div className="single-comment">
      <div>
        <Comment
          datetime={<span>{formateTime(comment.createdAt)}</span>}
          actions={action}
          author={<h2 className="username">{comment.user}</h2>}
          avatar={<CustomIcon name="user" />}
          content={
            <div className="content">
              <p className="comment">{comment.desc || comment.message}</p>
            </div>
          }
        >
          {openReply && (
            <ReplyForm
              comment={comment}
              setComment={setComment}
              setShowReply={setOpenReply}
            />
          )}

          <div className="replies-contain">
            <div className="r-length">
              <span className="count">
                {comment && comment.replies.length} Replies
              </span>
              <hr className="reply-rule" />
            </div>

            {comment.replies &&
              comment.replies.length > 0 &&
              comment.replies.map((el) => (
                <SingleReply key={el._id} reply={el} />
              ))}
          </div>
        </Comment>
      </div>
    </div>
  );
};

export default SingleComment;
