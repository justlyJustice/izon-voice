import * as Yup from "yup";

import { Form, Input, SubmitButton } from "components/forms";
import commentService from "services/commentService";

const ReplyForm = ({ comment, setComment }) => {
  const handleSubmit = async ({ message }, { resetForm }) => {
    const res = await commentService.addReply(message, comment._id);

    if (res.ok) {
      setComment({
        ...comment,
        replies: [res.data.data, ...comment.replies],
      });

      resetForm();
    }

    if (!res.ok) {
      alert(`Failed`);
      console.log(res);
    }

    return res;
  };

  const validationSchema = Yup.object().shape({
    message: Yup.string().required().label(`Message`),
  });

  return (
    <div className="reply-form" style={{ marginLeft: `70px` }}>
      <Form
        initialValues={{ message: `` }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Input name={`message`} placeholder={`Enter reply...`} />

        <SubmitButton className="reply-btn">Reply</SubmitButton>
      </Form>
    </div>
  );
};

export default ReplyForm;
