import styled from "styled-components";
import { Link } from "react-router-dom";

const TextLink = styled(Link)`
  font-family: Playfair Display;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  color: #000000;
  text-decoration: underline;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

const AppLink = ({ children, to, state, ...otherProps }) => {
  return (
    <TextLink to={to} {...otherProps} state={state}>
      {children}
    </TextLink>
  );
};

export default AppLink;
