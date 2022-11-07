import { Comment } from "antd";
import "antd/dist/antd.css";

import { formateTime } from "utils/helpers";
import CustomIcon from "components/common/CustomIcon";

const SingleReply = ({ reply }) => {
  return (
    <div style={{ marginLeft: `70px` }}>
      <span>Replies</span>

      <Comment
        datetime={<span>{formateTime(reply.createdAt)}</span>}
        author={<h2 className="username">{reply.user}</h2>}
        avatar={<CustomIcon name="user" />}
        content={
          <div className="content">
            <p className="comment">{reply.message}</p>
          </div>
        }
      />
    </div>
  );
};

export default SingleReply;
