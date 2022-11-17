import Proptypes from "prop-types";
import { Helmet } from "react-helmet";

const metaDecorator = require("config/metaDecorator");

const Head = ({ description, title, image }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:image" content={metaDecorator.hostname + image} />
      <meta property="og:description" content={description} />
      <meta
        property="og:url"
        content={
          metaDecorator.hostname +
          window.location.pathname +
          window.location.search
        }
      />
    </Helmet>
  );
};

Head.propTypes = {
  description: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  image: Proptypes.string.isRequired,
};

export default Head;
