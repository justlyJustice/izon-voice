/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Comment } from "antd";
import "antd/dist/antd.css";

import { formateTime } from "utils/helpers";
import CustomIcon from "components/common/CustomIcon";
import ReplyForm from "./ReplyForm";
import SingleReply from "./SingleReply";

const SingleComment = ({ initialComment }) => {
  const [comment, setComment] = useState(initialComment);

  const [openReply, setOpenReply] = useState(false);

  const showReply = () => {
    setOpenReply(!openReply);
  };

  const action = [
    <span onClick={showReply} className={`reply-link`}>
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
          {/*  {comment.replies &&
            comment.replies.length > 0 &&
            comment.replies.map((el) => (
              <SingleReply key={el._id} reply={el} />
            ))} */}
        </Comment>
      </div>
      {/* 
      {openReply && <ReplyForm comment={comment} setComment={setComment} />} */}
    </div>
  );
};

export default SingleComment;
