/* eslint-disable no-unused-vars */
import { useFormikContext } from "formik";

import FormError from "./FormError";

const TextArea = ({ name, ...otherProps }) => {
  const { errors, setFieldTouched, values, setFieldValue } = useFormikContext();

  return (
    <div style={{ marginBottom: "15px" }}>
      <textarea
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
