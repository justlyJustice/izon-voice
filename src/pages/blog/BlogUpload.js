/* eslint-disable no-unused-vars */
import { useState } from "react";
import { toast } from "react-toastify";

import { uploadBlogPost } from "../../services/postService";
import { categories } from "../../utils/options";

import {
  Button,
  Contain,
  Form,
  FormContainer,
  Group,
} from "../../styles/blogUploadStyles";

const initialValues = {
  title: "",
  description: "",
  quote: "",
  category: "",
};

const BlogUpload = () => {
  const [values, setValues] = useState(initialValues);
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (values.description === "") {
      return setError(true);
    }

    const data = {
      ...values,
      file,
    };

    try {
      await uploadBlogPost(data);
      toast.success("Post upload successful");
      setSuccess(true);

      setValues(initialValues);
      setFile(null);
    } catch (ex) {
      toast.error("Post upload failed!");
      console.log(ex);
    }
  };

  return (
    <>
      <FormContainer>
        <Form onSubmit={handleSubmit} encType="muiltipart/form-data">
          {error && (
            <div>
              <span className="error"></span>
            </div>
          )}

          <h2>Create a post</h2>

          <Contain>
            <Group>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                value={values.title}
                onChange={handleChange}
              />
            </Group>

            <Group>
              <label htmlFor="quote">Quote</label>
              <input
                type="text"
                name="quote"
                id="quote"
                value={values.quote}
                onChange={handleChange}
              />
            </Group>
          </Contain>

          <Contain>
            <Group>
              <label htmlFor="file">File</label>
              <input
                type="file"
                name="file"
                id="file"
                onChange={handleFileInputChange}
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
              >
                <option value="">Select...</option>

                {categories.map((category, i) => (
                  <option value={category.value} key={i}>
                    {category.title}
                  </option>
                ))}
              </select>
            </Group>
          </Contain>

          <Group>
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              name="description"
              id="description"
              value={values.description}
              onChange={handleChange}
            />
          </Group>

          <Button
            disabled={loading || values.description === ""}
            type="submit"
            style={{
              backgroundColor: success ? "#26fc05" : "",
            }}
          >
            {success ? "Upload Successful!" : "Submit"}
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default BlogUpload;
