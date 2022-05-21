import { Btn } from "../../styles/loginStyles";

const Button = ({ path, children, onClick, ...otherProps }) => {
  return (
    <Btn type="button" onClick={onClick} {...otherProps}>
      {children}
    </Btn>
  );
};

export default Button;
