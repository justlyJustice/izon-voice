/* eslint-disable no-unused-vars */
import { useState } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import { Button, SuccessButton } from "styles/loginStyles";
import auth from "components/services/authService";

const FacebookAuth = ({ text, state }) => {
  const [success, setSuccess] = useState(false);

  const componentClicked = () => console.log("Component clicked");

  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <FacebookLogin
      appId="1049705962598252"
      fields="name,email,picture"
      onClick={componentClicked}
      callback={responseFacebook}
      render={(renderProps) =>
        success ? (
          <SuccessButton disabled={true}>
            Sucessful <i className="fa-solid fa-check"></i>
          </SuccessButton>
        ) : (
          <Button onClick={renderProps.onClick}>
            {text} <i className="icon fa-brands fa-facebook" />
          </Button>
        )
      }
    />
  );
};

export default FacebookAuth;
