import { Formik } from "formik";

const AppForm = ({
  children,
  initialValues,
  onSubmit,
  validationSchema,
  ...otherProps
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      {...otherProps}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;
