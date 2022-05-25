import { useFormikContext } from "formik";
import Button from "components/common/Button";

const SubmitButton = ({ className, icon, style, children, ...otherProps }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <Button onClick={handleSubmit} style={style} {...otherProps}>
      {children}
    </Button>
  );
};

export default SubmitButton;
