import { useState } from "react";
/* import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"; */

const Test = () => {
  const [data, setData] = useState([]);
  const [values, setValues] = useState({
    title: "",
    body: "",
  });
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleAdd = () => {
    setData([values, ...data]);

    setShowForm(false);

    setValues({
      ...values,
      title: "",
      body: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.title.length <= 3) {
      return;
    }
  };

  return (
    <section>
      <style>
        {`
          section {
          }

          .head {
            align-items: center;
            display: flex;
            justify-content: space-between;
          }

          .head-text {
            font-size: 28px;
            margin: 10px 0;
          }

          .form-contain {
            margin: 10px 0;
          }

          .form-contain .form-control {
            display: flex;
            flex-direction: column;
            margin: 8px 0;
          }

          .form-contain .form-control input {
            background-color: #f4f4f4;
            padding: 10px;
            width: 400px;
          }

          .form-contain .submit-btn {
            background: #1b4ef5;
            border-radius: 10px;
            color: white;
            cursor: pointer;
            width: 120px;
            padding: 10px;
          }
        `}
      </style>

      <div className="container">
        <div className="my-3">
          {showForm ? (
            <button
              className="btn btn-danger rounded-pill"
              onClick={() => setShowForm(false)}
            >
              {" "}
              <i className="fa-solid fa-close"></i> Close
            </button>
          ) : (
            <button
              className="btn btn-success rounded-pill pull-right"
              onClick={() => setShowForm(true)}
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i className="fa-solid fa-plus"></i> Add
            </button>
          )}
        </div>

        <div className="">
          {data.length > 0 ? (
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th>Body</th>
                </tr>
              </thead>

              <tbody>
                {data.map((item, i) => (
                  <tr key={i}>
                    <td>{item.title}</td>

                    <td>{item.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="alert alert-danger">No Data!</div>
          )}
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      onChange={handleChange}
                      className="form-control"
                      value={values.title}
                    />
                  </div>

                  <div>
                    <label htmlFor="body">Body</label>
                    <input
                      type="text"
                      name="body"
                      id="body"
                      onChange={handleChange}
                      className="form-control"
                      value={values.body}
                    />
                  </div>
                </form>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => setShowForm(false)}
                >
                  Close
                </button>

                <button
                  type="submit"
                  className="btn btn-warning"
                  onClick={handleAdd}
                >
                  Add Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Test;
