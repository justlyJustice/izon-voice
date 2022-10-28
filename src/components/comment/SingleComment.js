import { formateTime } from "utils/helpers";

const SingleComment = ({ comment }) => {
  return (
    <div className="user_contain">
      <div className="user">
        <div className="icon_container">
          <i className="fa-solid fa-user"></i>

          <hr className="user-rule" />
        </div>

        <div className="name-contain">
          <div>
            <h2 className="username">{comment.user}</h2>

            <p className="comment">{comment.desc || comment.message}</p>
          </div>
        </div>
      </div>

      <div className="time-stamp">
        <span>{formateTime(comment.createdAt)}</span>
      </div>
    </div>
  );
};

export default SingleComment;
