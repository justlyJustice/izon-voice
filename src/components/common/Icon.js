import FontAwesome from "react-fontawesome";

const Icon = ({ name, className, size, ...otherProps }) => {
  return <FontAwesome className={className} name={name} {...otherProps} />;
};

export default Icon;
