/* eslint-disable no-unused-vars */
import * as Yup from "yup";
import { logo } from "assets/images";
import { Form, Input, SubmitButton } from "components/forms";

import authService from "services/authService";
import useSubmit from "hooks/useSubmit";
import { useNavigate } from "react-router-dom";
import Head from "components/common/Head";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

const AdminLogin = () => {
  const {
    submit: login,
    submitting,
    error,
    success,
    status,
  } = useSubmit(authService.login);

  const handleSubmit = (values) => {
    login(values, `/dashboard`);
  };

  return (
    <>
      <Head
        image={logo}
        title="IzonVoice | Admin Login"
        description="Manage blog"
      />

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

            {success && <span className="text-success">Login Successful!</span>}

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
    </>
  );
};

export default AdminLogin;
