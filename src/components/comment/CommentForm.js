import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as Yup from "yup";

import { Form, TextArea, SubmitButton } from "../forms";
import comment from "services/commentService";
import StatusAnimation from "components/common/StatusAnimation";

const validationSchema = Yup.object().shape({
  message: Yup.string().required().label("Comment"),
});

const CustomTextArea = styled(TextArea)`
  width: 100%;
  height: 80px;
  resize: none;
  border: 2px solid #dbdbdb;
  border-radius: 20px;
  padding: 8px 25px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #080808;

  &:placeholder {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #e0e0e0;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Button = styled(SubmitButton)`
  cursor: pointer;
  display: block;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  color: #ffffff;
  width: 240px;
  background: rgba(17, 55, 254, 0.7);
  border-radius: 20px;
  padding: 17px;
  transition: ease all 0.3s;

  &:hover {
    color: rgba(17, 55, 254, 0.7);
    border: 1px solid rgba(17, 55, 254, 0.7);
    background: transparent;
  }
`;

const CommentForm = ({ postId, user }) => {
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shown, setShown] = useState(false);

  const handleSubmit = async ({ message }, { resetForm }) => {
    try {
      setLoading(true);
      const res = await comment.postComment(postId, message);

      resetForm();

      if (res.status === 201) {
        setSuccess(true);

        setTimeout(() => {
          setSuccess(false);
          window.location.reload();
        }, 3000);
      }
      setLoading(false);
    } catch (ex) {
      setLoading(false);

      if (ex && ex.response.status === 400) {
        setFailed(true);
        setTimeout(() => {
          setFailed(false);
        }, 3000);
      }
    }
  };

  const verifyUser = () => {
    if (!user) {
      setShown(true);
    }
  };

  return (
    <>
      <style>
        {`
          .to_login {
            color: red;
          }
        `}
      </style>

      <StatusAnimation failed={failed} success={success} />

      <div className="comment-box">
        <Form
          initialValues={{
            message: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <CustomTextArea
            placeholder="What are your thoughts?"
            name="message"
            /*  disabled={!user} */
            onClick={() => verifyUser()}
          />

          {shown ? (
            <Link to="/login" className="to_login">
              <span>You must login to comment.</span>
            </Link>
          ) : null}

          {user && (
            <Button type="button" disabled={loading}>
              {loading ? (
                <>Sending....</>
              ) : (
                <>
                  Send <i className="fa fa-send"></i>
                </>
              )}
            </Button>
          )}
        </Form>
      </div>
    </>
  );
};

export default CommentForm;
