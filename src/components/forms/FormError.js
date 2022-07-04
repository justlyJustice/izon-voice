import styled from "styled-components";

const Text = styled.small`
  color: red;
  display: block !important;
`;

const FormError = ({ error }) => {
  if (!error) return null;

  return <Text>{error}</Text>;
};

export default FormError;
