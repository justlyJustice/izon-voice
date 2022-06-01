import { useState } from "react";
import { Navigate } from "react-router-dom";

import * as Yup from "yup";

import Alert from "../utils/Alert";
import AppLink from "components/common/AppLink";
import { logo } from "assets/images";
import { Form, Input, SubmitButton } from "components/forms";

import { register } from "services/userService";
import auth from "services/authService";
import StatusAnimation from "components/common/StatusAnimation";
import Head from "components/common/Head";
import { Container, Button } from "styles/registerStyles";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().label("Email"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required()
    .label("Confirm provided password"),
  name: Yup.string().required().label("Name"),
  password: Yup.string().required().min(5).max(250).label("Password"),
});

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setIsLoading(true);
      const res = await register(values);
      auth.loginWithJwt(res.data.token);

      Alert.success("Registration", "Was successful, redirecting...");

      setSuccess(true);
      setIsLoading(false);

      setTimeout(() => {
        window.location.href = "/home";
      }, 5000);

      resetForm();
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        Alert.error("Error registering user!", ex.response.data.message);
      }

      setSuccess(false);
      setIsLoading(false);
    }
  };

  if (auth.currentUser) return <Navigate to="/blog" />;

  const googleAuth = () => {
    window.open(`${process.env.REACT_APP_API_URL}auth/google`, "_self");
  };

  return (
    <>
      <StatusAnimation success={success} />

      <Head
        title="Izon Voice | Register"
        description="Own a space real quick and get to know what the voices speaks about"
      />

      <Container>
        <div className="container grid">
          <div className="left-div">
            <img src={logo} alt="Izon voice logo" className="logo" />

            <div className="left-para-contain">
              <p className="para">
                <span>Own a space real quick</span> and get to know what the
                voices speaks about
              </p>
            </div>
          </div>

          <div className="right-div flex">
            <div className="form">
              <Form
                initialValues={{
                  email: "",
                  confirm_password: "",
                  name: "",
                  password: "",
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
              >
                <Input name="name" label="Name" placeholder="Provide name" />
                <Input name="email" label="Email" placeholder="Provide email" />
                <Input
                  name="password"
                  label="Password"
                  placeholder="Provide password"
                  type="password"
                />
                <Input
                  name="confirm_password"
                  label="Confirm password"
                  placeholder="Repeat provided password"
                  type="password"
                />

                <SubmitButton
                  disabled={isLoading === true}
                  style={{
                    cursor: isLoading && "not-allowed",
                  }}
                >
                  {isLoading ? (
                    <i className="fa fa-spiner fa-spin"></i>
                  ) : (
                    "REGISTER"
                  )}
                </SubmitButton>
              </Form>
            </div>

            <div className="right-bottom-div">
              <hr className="rule" />

              <div className="button-group flex">
                <Button to="#" onClick={googleAuth}>
                  Register With{" "}
                  <i
                    className="fa-brands fa-google"
                    style={{ color: "#EA1919" }}
                  />
                </Button>
              </div>

              <AppLink to="/login">Have an account already? Login</AppLink>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Register;
