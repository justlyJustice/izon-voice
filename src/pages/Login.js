import { Navigate, useLocation } from "react-router-dom";
import * as Yup from "yup";

import AppLink from "components/common/AppLink";
import { Form, Input } from "components/forms";

import useAuth from "hooks/useAuth";
import useSubmit from "hooks/useSubmit";

import {
  LoginContainer,
  Btn as SubmitButton,
  SuccessButton,
} from "styles/loginStyles";
import auth from "services/authService";
import { logo } from "assets/images";

import GoogleAuth from "components/GoogleAuth";
import Head from "components/common/Head";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().label("Email"),
  password: Yup.string().required().min(5).max(20).label("Password"),
});

const Login = () => {
  const { state } = useLocation();
  const { user } = useAuth();
  const {
    submit: login,
    submitting: isSubmitting,
    success,
  } = useSubmit(auth.login);

  const loginUser = (values, { resetForm }) => {
    login(values, state ? state.from : "/home", `Login sucessful!`, resetForm);
  };

  if (user) return <Navigate to="/home" />;

  return (
    <LoginContainer>
      <Head
        title="Izonvoice - Login"
        description="Return right in and hear from some cool voices around the globe"
        image={logo}
      />

      <div className="container grid">
        <div className="left-div">
          <img src={logo} alt="Izon voice logo" className="logo" />

          <div className="left-para-contain">
            <p className="para">
              <span>Return right in</span> and hear from some cool voices around
              the globe
            </p>
          </div>
        </div>

        <div className="right-div flex">
          <div className="form">
            <Form
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={loginUser}
              validationSchema={validationSchema}
            >
              <Input
                name="email"
                label="Email"
                placeholder="Enter your email..."
              />

              <Input
                name="password"
                label="Password"
                placeholder="Enter your password..."
                type="password"
              />

              {success ? (
                <SuccessButton>Success</SuccessButton>
              ) : (
                <SubmitButton
                  style={{
                    cursor: isSubmitting && "not-allowed",
                  }}
                >
                  {isSubmitting ? (
                    <i className="fa-solid fa-spinner fa-spin"></i>
                  ) : (
                    "LOGIN"
                  )}
                </SubmitButton>
              )}
            </Form>
          </div>

          <div className="right-bottom-div">
            <hr className="rule" />

            <div className="button-group flex">
              <GoogleAuth text="Continue with" state={state} />
            </div>

            <AppLink to="/sign-up" state={{ from: state?.from }}>
              Don’t own an account yet? Register
            </AppLink>
          </div>
        </div>
      </div>
    </LoginContainer>
  );
};

export default Login;
