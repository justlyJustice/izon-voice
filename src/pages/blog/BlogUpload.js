/* eslint-disable no-unused-vars */
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

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
  quote: "",
  category: "",
  images: [],
};

const BlogUpload = () => {
  const [values, setValues] = useState(initialValues);
  const [file, setFile] = useState(null);
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

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
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleSelectImages = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      ...values,
      file,
      images,
    };

    try {
      setLoading(true);
      const res = await uploadBlogPost(postData);
      setLoading(false);

      if (res.status === 201) {
        setValues(initialValues);

        setFile(null);

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

          <Contain>
            <Group>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                value={values.title}
                onChange={handleChange}
                r
                required
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
                required
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
                required
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

          {file && (
            <div className="image-contain">
              <img src={imageUrl} alt={file.name} />
            </div>
          )}

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
            <label htmlFor="images">Images</label>
            <input
              type="file"
              multiple
              id="images"
              onChange={handleSelectImages}
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
