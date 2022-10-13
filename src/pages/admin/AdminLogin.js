/* eslint-disable no-unused-vars */
import * as Yup from "yup";
import { logo } from "assets/images";
import { Form, Input, SubmitButton } from "components/forms";

import authService from "services/authService";
import useSubmit from "hooks/useSubmit";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

const AdminLogin = () => {
  const {
    data,
    submit: login,
    submitting,
    error,
    status,
  } = useSubmit(authService.login);

  const handleSubmit = (values) => {
    console.log(values);
    /*  login(values);

    if (data && data)
      setTimeout(() => {
        window.location = "/admin";
      }, 2000); */
  };

  return (
    <div className="auth-contain">
      <div className="left-contain">
        <img src={logo} alt="Logo" />
      </div>

      <div className="right-contain">
        <div className="form__contain">
          <div className="text-div">
            <h2>
              Welcome Admin <i className="fa-solid fa-user-secret"></i>
            </h2>
            <h4>LOGIN TO CONTINUE</h4>
          </div>

          {error && <span className="error">{status}</span>}

          <Form
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Input
              className={`input`}
              name={`email`}
              placeholder={`Email address`}
            />

            <Input
              className={`input`}
              name={`password`}
              placeholder={`Enter password`}
              type={`password`}
            />

            <SubmitButton className={`submit-btn`} disabled={submitting}>
              {submitting ? (
                <>
                  Checking... <i className="fa-solid fa-spinner fa-spin"></i>
                </>
              ) : (
                <>Login</>
              )}
            </SubmitButton>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
