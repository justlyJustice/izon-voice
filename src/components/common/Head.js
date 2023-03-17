import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

import webUrl from "config/webUrl";

const Head = ({ description, title, image }) => {
  let location = useLocation();
  let currentUrl = webUrl + location.pathname;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="image" content={image} />
      <meta property="url" content={currentUrl} />

      {/* Google / Search Engine Tags */}
      <meta itemprop="name" content={title} />
      <meta itemprop="description" content={description} />
      <meta itemprop="image" content={image} />

      {/* Facebook Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:width" content={300} />
      <meta property="og:height" content={300} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Head;
