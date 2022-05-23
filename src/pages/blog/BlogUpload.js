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
import StatusPlaceholder from "../../components/common/StatusPlaceholder";

const initialValues = {
  author: "",
  title: "",
  description: "",
  quote: "",
  category: "",
};

const BlogUpload = () => {
  const [values, setValues] = useState(initialValues);
  const [file, setFile] = useState(null);
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

  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      ...values,
      file,
    };

    setLoading(true);
    const res = await uploadBlogPost(postData);
    setLoading(false);

    // Setting the status
    setSuccess(true);

    // Clearing the state
    setValues(initialValues);
    setFile(null);

    if (!res.ok) {
      console.log(res.problem);
      setLoading(false);

      // Setting the status
      setError(true);
    }

    /*  try {
     
      await uploadBlogPost(postData);
      

     

      // Clearing the state
     
    } catch (ex) {
      
    } */
  };

  return (
    <>
      <FormContainer>
        <Form onSubmit={handleSubmit} encType="muiltipart/form-data">
          <StatusPlaceholder error={error} success={success} />

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
            <label htmlFor="author">Author</label>
            <input
              type="text"
              name="author"
              id="author"
              onChange={handleChange}
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
            />
          </Group>

          <Button type="submit" disabled={loading}>
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
