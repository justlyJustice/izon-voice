import * as Yup from "yup";
/* import { MentionsInput } from "react-mentions"; */

import { Form, Input, SubmitButton } from "components/forms";
import commentService from "services/commentService";
import logger from "utils/logger";
import { useState } from "react";

const ReplyForm = ({ comment, setComment, setShowReply }) => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async ({ message }, { resetForm }) => {
    setSubmitting(true);
    const res = await commentService.addReply(message, comment._id);
    setSubmitting(false);

    if (res.ok) {
      setComment({
        ...comment,
        replies: [res.data.data, ...comment.replies],
      });

      setShowReply(false);

      resetForm();
    }

    if (!res.ok) {
      alert(`Failed`);
    }

    return logger(res);
  };

  const validationSchema = Yup.object().shape({
    message: Yup.string().required().label(`Message`),
  });

  return (
    <div className="reply-form">
      <Form
        initialValues={{ message: `` }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Input name={`message`} placeholder={`Enter reply...`} />

        <SubmitButton disabled={submitting} className="reply-btn">
          {submitting ? (
            <i className="fa-solid fa-spinner fa-pulse"></i>
          ) : (
            "Reply"
          )}
        </SubmitButton>
      </Form>
    </div>
  );
};

export default ReplyForm;
