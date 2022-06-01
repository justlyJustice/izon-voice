import { useFormikContext } from "formik";
import styled from "styled-components";

/* import Button from "components/common/Button"; */

const Button = styled.button`
  cursor: pointer;
  color: #fff;
  position: absolute;
  width: 180px;
  background: #1137fe;
  border-radius: 10px;
  padding: 15px;
  left: 50%;
  transform: translateX(-50%);
  /*   margin-top: 10px; */
  font-family: "Montserrat";
  font-weight: 800;
  font-size: 18px;
  text-transform: uppercase;
`;

const SubmitButton = ({ className, icon, style, children, ...otherProps }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <Button onClick={handleSubmit} style={style} {...otherProps}>
      {children}
    </Button>
  );
};

export default SubmitButton;
