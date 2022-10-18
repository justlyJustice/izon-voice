import DashboardWrapper from "components/admin/Wrapper";
/* eslint-disable no-unused-vars */
import { useState } from "react";
import * as Yup from "yup";

import { uploadBlogPost } from "services/postService";
import { categories } from "utils/options";

import { Form, Input, Select, SubmitButton, TextArea } from "components/forms";
import ImageInput from "components/forms/ImageInput";

const validationSchema = Yup.object().shape({
  author: Yup.string().required().label(`Author`),
  category: Yup.string().required().label(`Category`),
  description: Yup.string().required().label("Description"),
  title: Yup.string().required().label("Title"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const CreatePost = () => {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (values) => {
    /*  setLoading(true);
    const res = await uploadBlogPost(values);
    setLoading(false); */
    /*  if(res.ok) {
      if(res.status === 201) {
        resetForm()
      }
    } */
    /*  const postData = {
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
    } */
  };

  return (
    <DashboardWrapper topText={`Create new posts`}>
      <div className="form-contain">
        <h3 className="create-text">Create new post</h3>

        <Form
          initialValues={{
            author: "",
            title: "",
            description: "",
            category: "",
            images: [],
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Input name={`title`} placeholder={`Enter post title`} />

          <div className="form-group">
            <ImageInput name={`images`} />

            <Select options={categories} name={`category`} />
          </div>

          <Input name={`author`} placeholder={`Enter post author`} />

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
