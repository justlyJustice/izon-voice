import * as Yup from "yup";

import { Form, Input } from "components/forms";
import commentService from "services/commentService";
import { useRef } from "react";

const ReplyForm = ({ showReply }) => {
  const elRef = useRef();
  const handleSubmit = async (values) => {
    const res = await commentService.addReply(values);

    if (res.ok) {
      console.log(res.data);
    }

    if (!res.ok) {
      console.log(res.data.message);
    }

    return res;
  };

  const validationSchema = Yup.object().shape({
    message: Yup.string().required().label(`Message`),
  });

  if (!showReply) return null;

  return (
    <div className="reply-form" ref={elRef}>
      <Form
        initialValues={{ message: `` }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Input name={`message`} placeholder={`Enter reply...`} />
      </Form>
    </div>
  );
};

export default ReplyForm;
