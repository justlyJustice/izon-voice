/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import * as Yup from "yup";

import Alert from "../utils/Alert";
import AppLink from "components/common/AppLink";
import Icon from "components/common/Icon";
import { Form, Input, SubmitButton } from "components/forms";
import StatusAnimation from "components/common/StatusAnimation";
import useUser from "../hooks/useUser";

import {
  LoginContainer,
  Rule,
  ButtonGroup,
  Button,
} from "../styles/loginStyles";
import auth from "services/authService";
import { logo } from "assets/images";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().label("User name"),
  password: Yup.string().required().min(5).max(250).label("Password"),
});

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { setUser, user } = useUser();
  const navigate = useNavigate();

  const loginUser = async (values, { resetForm }) => {
    try {
      setIsLoading(true);
      const user = await auth.login(values);
      setUser(user);

      setSuccess(true);
      setIsLoading(false);
      resetForm();

      setTimeout(() => {
        navigate("/home");
      }, 5000);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        Alert.error("Error logging in user!", ex.response.data.message);
      }

      setSuccess(false);
      setIsLoading(false);
    }
  };

  const googleAuth = () => {
    window.open(`${process.env.REACT_APP_API_URL}auth/google`, "_self");
  };

  if (user) return <Navigate to="/home" />;

  return (
    <>
      <StatusAnimation success={success} />

      <section className="container">
        <LoginContainer>
          <div className="left-container">
            <img src={logo} alt="Izon voice logo" className="logo" />

            <div className="left_para_contain">
              <p className="para">
                <span>Return right in</span> and hear from some cool voices
                around the globe
              </p>
            </div>
          </div>

          <div className="right-container">
            <div className="form-contain">
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

                <SubmitButton
                  style={{
                    cursor: isLoading ? "not-allowed" : "",
                    position: "relative",
                    top: "40px",
                    left: "130px",
                    wdith: "50%",
                  }}
                >
                  {isLoading ? (
                    <Icon name="spinner" className="fa-spin" />
                  ) : (
                    "LOGIN"
                  )}
                </SubmitButton>
              </Form>
            </div>

            <div
              style={{
                marginTop: "50px",
              }}
            >
              <Rule />
              <ButtonGroup>
                <Button to="#" onClick={googleAuth}>
                  Login With{" "}
                  <i
                    className="fa-brands fa-google"
                    style={{ color: "#EA1919" }}
                  />
                </Button>
              </ButtonGroup>

              <AppLink to="/register">
                Don’t own an account yet? Register
              </AppLink>
            </div>
          </div>
        </LoginContainer>
      </section>
    </>
  );
};

export default Login;
