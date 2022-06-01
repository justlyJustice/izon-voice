/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import * as Yup from "yup";

import Alert from "../utils/Alert";
import AppLink from "components/common/AppLink";
import { Form, Input, SubmitButton } from "components/forms";
import StatusAnimation from "components/common/StatusAnimation";
import useUser from "hooks/useUser";

import { LoginContainer, Button } from "styles/loginStyles";
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

      Alert.success("Login", "Was successful, redirecting...");

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

      <>
        <LoginContainer>
          <div className="container grid">
            <div className="left-div">
              <img src={logo} alt="Izon voice logo" className="logo" />

              <div className="left-para-contain">
                <p className="para">
                  <span>Return right in</span> and hear from some cool voices
                  around the globe
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

                  <SubmitButton
                    style={{
                      cursor: isLoading && "not-allowed",
                    }}
                  >
                    {isLoading ? (
                      <i className="fa fa-spiner fa-spin"></i>
                    ) : (
                      "LOGIN"
                    )}
                  </SubmitButton>
                </Form>
              </div>

              <div className="right-bottom-div">
                <hr className="rule" />

                <div className="button-group flex">
                  <Button to="#" onClick={googleAuth}>
                    Login With{" "}
                    <i
                      className="fa-brands fa-google"
                      style={{ color: "#EA1919" }}
                    />
                  </Button>
                </div>

                <AppLink to="/register">
                  Don’t own an account yet? Register
                </AppLink>
              </div>
            </div>
          </div>
        </LoginContainer>
      </>
    </>
  );
};

export default Login;
