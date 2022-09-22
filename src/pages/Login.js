/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import * as Yup from "yup";

import Alert from "utils/Alert";
import AppLink from "components/common/AppLink";
import { Form, Input } from "components/forms";

import useUser from "hooks/useUser";
import useSubmit from "hooks/useSubmit";

import {
  LoginContainer,
  Btn as SubmitButton,
  SuccessButton,
} from "styles/loginStyles";
import auth from "components/services/authService";
import { logo } from "assets/images";

import GoogleAuth from "components/GoogleAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().label("Email"),
  password: Yup.string().required().min(5).max(20).label("Password"),
});

const Login = () => {
  /* const [success, setSuccess] = useState(false); */
  const { state } = useLocation();
  const { user } = useUser();
  const {
    data,
    error,
    submit: login,
    submitting: isSubmitting,
    success,
  } = useSubmit(auth.login);

  const loginUser = async (values, { resetForm }) => {
    const res = await login(values);

    if (data && data.token) {
      Alert.success("Successful!", "Login successful!");

      /* window.location = state ? state.from : "/home"; */
    }

    if (error) {
      Alert.error("Error logging in user!", res.data.message);
    }
    /* catch (ex) {
      if (ex.response && ex.response.status === 400) {
        Alert.error("Error logging in user!", ex.response.data.message);
      }

      setisSubmitting(false);
    } */
  };

  if (user) return <Navigate to="/home" />;

  return (
    <LoginContainer>
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
                label="Username"
                placeholder="Provide username"
              />

              <Input
                name="password"
                label="Password"
                placeholder="Provide password"
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
              <GoogleAuth text="Login With" state={state} />
            </div>

            <AppLink to="/register" state={{ from: state?.from }}>
              Don’t own an account yet? Register
            </AppLink>
          </div>
        </div>
      </div>
    </LoginContainer>
  );
};

export default Login;
