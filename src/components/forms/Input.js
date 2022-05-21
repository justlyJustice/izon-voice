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
  margin: 8px 0px;

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

  .icon-div {
    align-self: flex-end;
    position: relative;
  }

  #icon {
    position: absolute;
    right: 15px;
    bottom: 15px;
  }

  .error-icon {
    color: red;
  }

  .check-icon {
    color: green;
  }
`;

const Input = ({ name, className, label, labelStyle, ...otherProps }) => {
  const { errors, touched, values, setFieldValue, setFieldTouched } =
    useFormikContext();

  return (
    <InputGroup>
      {label && (
        <label className="label" style={labelStyle} htmlFor={name}>
          {label}
        </label>
      )}

      <InputField
        name={name}
        onBlur={() => setFieldTouched(name)}
        onChange={({ target: { value } }) => setFieldValue(name, value)}
        value={values[name]}
        id={name}
        style={{
          border: errors[name] && touched[name] ? "1px solid red" : "",
        }}
        {...otherProps}
      />

      <div className="icon-div">
        {errors && errors[name] && touched[name] ? (
          <i className="fa fa-close error-icon" id="icon"></i>
        ) : null}

        {/* {touched && !touched[name] ? (
          <i className="fa fa-check check-icon" id="icon"></i>
        ) : null} */}
      </div>
    </InputGroup>
  );
};

export default Input;
