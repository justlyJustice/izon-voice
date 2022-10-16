/* eslint-disable no-unused-vars */
import { useFormikContext } from "formik";
import styled from "styled-components";

import FormError from "./FormError";

const TextAreaField = styled.textarea`
  width: 100%;
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid #ccc;
  padding: 15px;
  font-weight: 600;
  resize: none;

  &::placeholder {
    color: #dbdbdb;
    font-size: 14px;
    font-style: normal;
    font-weight: 800;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const TextArea = ({ name, ...otherProps }) => {
  const { errors, setFieldTouched, values, setFieldValue } = useFormikContext();

  return (
    <div style={{ marginBottom: "15px" }}>
      <TextAreaField
        name={name}
        /*    onBlur={() => setFieldTouched(name)} */
        onChange={({ target: { value } }) => setFieldValue(name, value)}
        value={values[name]}
        id={name}
        /* style={{ border: errors[name] ? "1px solid red" : "" }} */
        {...otherProps}
      />

      <FormError error={errors[name]} />
    </div>
  );
};

export default TextArea;
