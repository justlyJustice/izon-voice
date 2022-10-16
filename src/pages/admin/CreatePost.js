import DashboardWrapper from "components/admin/Wrapper";
/* eslint-disable no-unused-vars */
import { useState } from "react";

import { uploadBlogPost } from "services/postService";
import { categories } from "utils/options";

import {
  Button,
  Contain,
  FormContainer,
  Group,
} from "../../styles/blogUploadStyles";
import StatusPlaceholder from "components/common/StatusPlaceholder";
import { Form, Input, SubmitButton, TextArea } from "components/forms";

const initialValues = {
  author: "",
  title: "",
  description: "",
  category: "",
};

const CreatePost = () => {
  const [values, setValues] = useState(initialValues);
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSelectImages = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      ...values,
      images,
    };

    try {
      setLoading(true);
      const res = await uploadBlogPost(postData);
      setLoading(false);

      if (res.status === 201) {
        setValues(initialValues);

        setImages(null);
        setSuccess(true);

        setTimeout(() => {
          setSuccess(false);
        }, 4000);
      }
    } catch (ex) {
      if (ex.response && !ex.response.ok) {
        setLoading(false);
        return setError(true);
      }
    }
  };

  return (
    <DashboardWrapper topText={`Create new posts`}>
      <div className="form-contain">
        <h3 className="create-text">Create new post</h3>

        <Form initialValues={{}} onSubmit={(e) => e.preventDefault()}>
          <Input name={`title`} placeholder={`Enter post title`} />

          <div className="form-group">
            <Input name={`title`} placeholder={`Enter post title`} />

            <Input name={`title`} placeholder={`Enter post title`} />
          </div>

          <Input name={`title`} placeholder={`Enter post title`} />

          <TextArea
            name={`description`}
            placeholder={`Enter post description`}
          />

          <SubmitButton className={`upld-btn`}>Upload Post</SubmitButton>
        </Form>
      </div>
    </DashboardWrapper>
  );
};

export default CreatePost;
