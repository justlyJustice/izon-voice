import GoogleLogin from "react-google-login";

import { Button, SuccessButton } from "styles/loginStyles";
import auth from "services/authService";
import useSubmit from "hooks/useSubmit";

const GoogleAuth = ({ text, state }) => {
  const {
    submit: googleLogin,
    success,
    submitting: loading,
  } = useSubmit(auth.googleAuth);

  const onSuccess = async (res) => {
    googleLogin(res?.tokenId, state ? state.from : "/home");
    /*  try {
      setLoading(true);
      const result = await auth.googleAuth(res?.tokenId);
      setLoading(false);

      if (result.ok) {
        setSuccess(true);
        auth.loginWithJwt(result.data.token);

        setTimeout(() => {
          window.location = state ? state.from : "/home";

          setSuccess(false);
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    } */
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      onSuccess={onSuccess}
      cookiePolicy={"single_host_origin"}
      render={(renderProps) =>
        success ? (
          <SuccessButton disabled={true}>
            Sucessful <i className="fa-solid fa-check"></i>
          </SuccessButton>
        ) : (
          <Button onClick={renderProps.onClick}>
            {loading ? (
              <i className="icon fa-solid fa-spinner fa-spin" />
            ) : (
              <>
                {text} <i className="icon fa-brands fa-google" />
              </>
            )}
          </Button>
        )
      }
    />
  );
};

export default GoogleAuth;
