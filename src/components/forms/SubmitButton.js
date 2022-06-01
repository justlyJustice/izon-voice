import { useFormikContext } from "formik";

const SubmitButton = ({ className, icon, style, children, ...otherProps }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <button
      onClick={handleSubmit}
      className={className}
      style={style}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
