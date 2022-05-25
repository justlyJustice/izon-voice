import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import * as Yup from "yup";

import Alert from "../utils/Alert";
import AppLink from "components/common/AppLink";
import { logo } from "assets/images";
import { Form, Input, SubmitButton } from "components/forms";
import Icon from "components/common/Icon";

import { register } from "services/userService";
import auth from "services/authService";
import StatusAnimation from "components/common/StatusAnimation";
import Head from "components/common/Head";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().label("Email"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required()
    .label("Confirm provided password"),
  name: Yup.string().required().label("Name"),
  password: Yup.string().required().min(5).max(250).label("Password"),
});

const Container = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  height: 100vh;

  .left-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 80px;
  }

  .left-container .logo {
    height: 200px;
    width: 200px;
    border-radius: 0px;
  }

  .left-container .para {
    font-family: Playfair Display;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    width: 430px;
  }

  .right-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .right-container .form-contain {
    height: fit-content;
    padding-left: 25px;
    padding-right: 25px;
    border-radius: 20px;
    padding-top: 20px;
    width: 430px;
    background-color: rgba(17, 55, 254, 0.7);
    box-shadow: 0px 20px 50px #dbdbdb;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    /* flex-direction: column; */

    .left-container {
      align-items: center !important;
      justify-content: center;
    }

    .left-container .logo {
      height: 100px;
      width: 100px;
    }

    .left-container .para {
      width: 314px;
      height: 57px;
      font-family: "Playfair Display";
      font-style: normal;
      font-weight: 800;
      font-size: 14px;
      line-height: 19px;
      text-align: center;
    }
  }
`;

const Rule = styled.hr`
  margin: 18px auto;
  width: 300px;
  height: 4px;
  background: #f2f2f2;
  border: none;
  border-radius: 20px;
`;

const ButtonGroup = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 30px 0px;
  width: 471px;
`;

const Button = styled(Link)`
  font-family: Playfair Display;
  text-align: center !important;
  color: #393939;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  width: 230px;
  padding: 10px;
  background: #f2f2f2;
  margin: 0px 5px;
  border-radius: 20px;
`;

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setIsLoading(true);
      const res = await register(values);
      auth.loginWithJwt(res.data.token);

      setSuccess(true);
      setIsLoading(false);

      setTimeout(() => {
        window.location.href = "/home";
      }, 5000);

      resetForm();
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        Alert.error("Error register user!", ex.response.data.message);
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

      <Container>
        <Head
          title="Izon Voice | Register"
          description="Own a space real quick and get to know what the voices speaks about"
        />

        <div className="left-container">
          <img src={logo} alt="Izon voice logo" className="logo" />

          <div>
            <p className="para">
              Own a space real quick and get to know what the voices speaks
              about
            </p>
          </div>
        </div>

        <div className="right-container">
          <div className="form-contain">
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
                  position: "relative",
                  top: "30px",
                  left: "100px",
                  cursor: isLoading && "not-allowed",
                }}
              >
                {isLoading ? (
                  <Icon name="spinner" className="fa-spin" />
                ) : (
                  "REGISTER"
                )}
              </SubmitButton>
            </Form>
          </div>

          <div
            style={{
              marginTop: "30px",
            }}
          >
            <Rule />

            <ButtonGroup>
              <Button to="#" onClick={googleAuth}>
                Register With{" "}
                <i
                  className="fa-brands fa-google"
                  style={{ color: "#EA1919" }}
                />
              </Button>
            </ButtonGroup>

            <AppLink to="/login">Have an account already? Login</AppLink>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Register;
