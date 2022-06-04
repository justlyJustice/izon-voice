import GoogleLogin from "react-google-login";
import { Button } from "styles/loginStyles";

const GoogleButon = ({ onSuccess, children, ...otherProps }) => {
  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      onSuccess={onSuccess}
      render={(renderProps) => (
        <Button onClick={renderProps.onClick}>{children}</Button>
      )}
      {...otherProps}
    />
  );
};

export default GoogleButon;
