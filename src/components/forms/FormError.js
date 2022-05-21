import styled from "styled-components";

const Text = styled.small`
  color: red;
  display: block !important;
`;

const FormError = ({ error, visible }) => {
  if (!error || !visible) return null;

  return <Text>{error}</Text>;
};

export default FormError;
