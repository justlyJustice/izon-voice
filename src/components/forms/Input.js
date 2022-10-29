/* eslint-disable no-unused-vars */
import { useFormikContext } from "formik";
import styled from "styled-components";

const InputField = styled.input`
  width: 100%;
  background: #ffffff;
  border-radius: 20px;
  padding: 15px;
  font-weight: 600;

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

const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px 0px;

  .label {
    color: white;
    margin: 5px;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: 20px;
    letter-spacing: 0em;
    margin-left: 20px;
  }
`;

const Input = ({ name, label, labelStyle, ...otherProps }) => {
  const { errors, touched, values, setFieldValue } = useFormikContext();

  return (
    <InputGroup>
      {label && (
        <label className="label" style={labelStyle} htmlFor={name}>
          {label}
        </label>
      )}

      <InputField
        name={name}
        /*   onBlur={() => setFieldTouched(name)} */
        onChange={({ target: { value } }) => setFieldValue(name, value)}
        value={values[name]}
        id={name}
        style={{
          border: errors[name] && touched[name] ? "1px solid red" : "",
        }}
        {...otherProps}
      />
    </InputGroup>
  );
};

export default Input;
