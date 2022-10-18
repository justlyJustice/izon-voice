/* eslint-disable no-unused-vars */
import { useFormikContext } from "formik";
import styled from "styled-components";

const SelectField = styled.select`
  width: 100%;
  background: #ffffff;
  border-radius: 20px;
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
    color: black;
    margin: 5px;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: 20px;
    letter-spacing: 0em;
    margin-left: 20px;
  }
`;

const Select = ({ name, options, label, labelStyle, ...otherProps }) => {
  const { errors, touched, values, setFieldValue, setFieldTouched } =
    useFormikContext();

  return (
    <InputGroup>
      {label && (
        <label className="label" style={labelStyle} htmlFor={name}>
          {label}
        </label>
      )}

      <SelectField
        name={name}
        onBlur={() => setFieldTouched(name)}
        onChange={({ target: { value } }) => setFieldValue(name, value)}
        value={values[name]}
        id={name}
        style={{
          border: errors[name] && "1px solid red",
        }}
        {...otherProps}
      >
        <option value="">Select Option</option>

        {options &&
          options.length > 0 &&
          options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {options.label}
            </option>
          ))}
      </SelectField>
    </InputGroup>
  );
};

export default Select;
