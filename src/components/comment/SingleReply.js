import { Comment } from "antd";
import "antd/dist/antd.css";

import { formateTime } from "utils/helpers";
import CustomIcon from "components/common/CustomIcon";

const SingleReply = ({ reply }) => {
  return (
    <Comment
      datetime={<span>{formateTime(reply.createdAt)}</span>}
      author={<h2 className="reply-username">{reply.user}</h2>}
      avatar={<CustomIcon name="user-circle" />}
      content={
        <div className="content">
          <p className="comment">{reply.message}</p>
        </div>
      }
    />
  );
};

export default SingleReply;
