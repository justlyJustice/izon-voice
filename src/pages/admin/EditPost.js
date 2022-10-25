/* eslint-disable react-hooks/exhaustive-deps */
import DashboardWrapper from "components/admin/Wrapper";
/* eslint-disable no-unused-vars */
import { useRef, useEffect } from "react";
import * as Yup from "yup";

import { getPost, uploadBlogPost } from "services/postService";
import { categories } from "utils/options";

import { Form, Input, Select, SubmitButton, TextArea } from "components/forms";
import ImageInput from "components/forms/ImageInput";
import { toast } from "react-toastify";
import useSubmit from "hooks/useSubmit";
import useApi from "hooks/useApi";
import { useParams } from "react-router-dom";
import LoadingAnimation from "components/common/LoadingAnimation";

const validationSchema = Yup.object().shape({
  author: Yup.string().required().label("Author"),
  category: Yup.string().required().label("Category"),
  description: Yup.string().required().label("Description"),
  title: Yup.string().required().label("Title"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const EditPost = () => {
  const { slug } = useParams();
  const formikRef = useRef();
  const {
    data: submitData,
    error,
    submitting,
    submit,
    success,
  } = useSubmit(uploadBlogPost);
  const { data: post, loading, request } = useApi(getPost);

  /* const mapToViewModel = async (post) => {}; */

  useEffect(() => {
    request(slug);

    if (post) {
      if (formikRef.current) {
        formikRef.current.setFieldValue("author", post.author);
      }
    }
  }, []);

  const handleSubmit = (values, { resetForm }) => {
    submit(values);

    if (submitData && submitData.title) {
      resetForm();
      toast.success(`Post uploaded successful!`);
    }

    if (error) {
      toast.error(`${(submitData && submitData.message) || submitData}!`);
    }
  };

  if (loading) return <LoadingAnimation loading={loading} />;

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
          innerRef={formikRef}
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
            className={`upld-btn ${success ? `success` : ``}`}
            disabled={submitting}
          >
            {submitting ? (
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

export default EditPost;
