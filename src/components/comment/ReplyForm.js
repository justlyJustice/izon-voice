import * as Yup from "yup";

import { Form, Input } from "components/forms";
import commentService from "services/commentService";

const ReplyForm = () => {
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

  return (
    <div className="reply-form">
      <Form
        initialValues={{ message: `` }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Input name={`message`} />
      </Form>
    </div>
  );
};

export default ReplyForm;
