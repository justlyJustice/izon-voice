import Proptypes from "prop-types";
import { Helmet } from "react-helmet";

const Head = ({ description, title, image }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta
        property="og:url"
        content={window.location + window.location.search}
      />
      <meta property="og:title" content={title} />
    </Helmet>
  );
};

Head.propTypes = {
  description: Proptypes.string,
  title: Proptypes.string,
};

export default Head;
