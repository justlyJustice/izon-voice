import { Navigate, useLocation } from "react-router-dom";

import * as Yup from "yup";

import AppLink from "components/common/AppLink";
import { logo } from "assets/images";
import { Form, Input } from "components/forms";

import { register } from "services/userService";
import auth from "services/authService";
import StatusAnimation from "components/common/StatusAnimation";
import Head from "components/common/Head";
import { Container, Btn as SubmitButton } from "styles/registerStyles";

import GoogleAuth from "components/GoogleAuth";
import useSubmit from "hooks/useSubmit";

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
  const { state } = useLocation();
  const {
    submit: registerUser,
    submitting: registering,
    success,
  } = useSubmit(register);

  const handleSubmit = (values, { resetForm }) => {
    registerUser(
      values,
      state ? state.from : "/home",
      `Registration sucessful!`,
      resetForm
    );
  };

  if (auth.currentUser) return <Navigate to="/home" />;

  return (
    <>
      <StatusAnimation success={success} />

      <Head
        description="Own a space reeal quick adn get to know what the voices speak about."
        title="Izonvoice - Signup"
        image={logo}
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
                <Input
                  name="name"
                  label="Name"
                  placeholder="Enter your name..."
                />

                <Input
                  name="email"
                  label="Email"
                  placeholder="Enter email address..."
                />

                <Input
                  name="password"
                  label="Password"
                  placeholder="Enter password..."
                  type="password"
                />

                <Input
                  name="confirm_password"
                  label="Confirm password"
                  placeholder="Repeat provided password"
                  type="password"
                />

                <SubmitButton
                  disabled={registering}
                  style={{
                    cursor: registering && "not-allowed",
                  }}
                >
                  {registering ? (
                    <i className="fa-solid fa-spinner fa-spin"></i>
                  ) : (
                    "REGISTER"
                  )}
                </SubmitButton>
              </Form>
            </div>

            <div className="right-bottom-div">
              <hr className="rule" />

              <div className="button-group flex">
                <GoogleAuth text="Continue With" state={state} />
              </div>

              <AppLink to="/login" state={{ from: state?.from }}>
                Have an account already? Login
              </AppLink>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Register;
