/* eslint-disable react-hooks/exhaustive-deps */
import DashboardWrapper from "components/admin/Wrapper";
/* eslint-disable no-unused-vars */
import * as Yup from "yup";

import { uploadBlogPost } from "services/postService";
import { categories } from "utils/options";

import { Form, Input, Select, SubmitButton, TextArea } from "components/forms";
import ImageInput from "components/forms/ImageInput";
import useSubmit from "hooks/useSubmit";
import { useEffect } from "react";
import { toast } from "react-toastify";

const validationSchema = Yup.object().shape({
  author: Yup.string().required().label("Author"),
  category: Yup.string().required().label("Category"),
  description: Yup.string().required().label("Description"),
  title: Yup.string().required().label("Title"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const CreatePost = () => {
  const {
    data,
    submitting: uploading,
    submit: uploadPost,
    success,
  } = useSubmit(uploadBlogPost);

  const handleSubmit = (values, { resetForm }) => {
    uploadPost(values, ``, `Post created successfully!`, resetForm);
  };

  useEffect(() => {
    copyToClipboard();
  }, [data.data]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `${
        process.env.NODE_ENV === "development"
          ? `http://localhost:8000`
          : `http://izonvoice.ng`
      }/${data.data && data.data.slug}`
    );

    toast.success(`URL copied to clipboard!`);
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

          <SubmitButton
            className={`upld-btn ${success && `success`}`}
            disabled={uploading}
          >
            {uploading ? (
              <i className="fa-solid fa-spinner fa-spin"></i>
            ) : (
              `Upload Post`
            )}{" "}
          </SubmitButton>
        </Form>
      </div>
    </DashboardWrapper>
  );
};

export default CreatePost;
