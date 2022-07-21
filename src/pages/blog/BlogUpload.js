/* eslint-disable no-unused-vars */
import { useState } from "react";

import { uploadBlogPost } from "services/postService";
import { categories } from "utils/options";

import {
  Button,
  Contain,
  Form,
  FormContainer,
  Group,
} from "../../styles/blogUploadStyles";
import StatusPlaceholder from "components/common/StatusPlaceholder";

const initialValues = {
  author: "",
  title: "",
  description: "",
  category: "",
};

const BlogUpload = () => {
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
    <>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <StatusPlaceholder error={error} success={success} />

          <div className="header">
            <h2>Create a post</h2>

            <hr />
          </div>

          <Group>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={values.title}
              onChange={handleChange}
              required
            />
          </Group>

          <Contain>
            <Group>
              <label htmlFor="image">Image</label>
              <input
                type="file"
                name="image"
                id="image"
                onChange={handleSelectImages}
                multiple
                required
                accept="image/*"
              />
            </Group>

            <Group>
              <label htmlFor="category">Category</label>

              <select
                type="text"
                name="category"
                id="category"
                value={values.category}
                onChange={handleChange}
                required
              >
                <option value="">Select...</option>

                {categories.map((category, i) => (
                  <option value={category.value} key={i}>
                    {category.label}
                  </option>
                ))}
              </select>
            </Group>
          </Contain>

          <Group>
            <label htmlFor="author">Author</label>
            <input
              type="text"
              name="author"
              id="author"
              value={values.author}
              onChange={handleChange}
              required
            />
          </Group>

          <Group>
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              name="description"
              id="description"
              value={values.description}
              onChange={handleChange}
              required
            />
          </Group>

          <Button type="submit" disabled={loading === true}>
            {loading ? (
              <>
                Uploading <i className="fa-solid fa-spinner fa-spin"></i>
              </>
            ) : (
              <>
                Upload Post <i className="fa-solid fa-upload"></i>
              </>
            )}
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default BlogUpload;
