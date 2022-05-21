import Proptypes from "prop-types";
import { Helmet } from "react-helmet";

const Head = ({ description, title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

Head.propTypes = {
  description: Proptypes.string,
  title: Proptypes.string,
};

export default Head;
