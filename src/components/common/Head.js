import Proptypes from "prop-types";
import { Helmet } from "react-helmet";

const Head = ({ description, title }) => {
  return (
    <Helmet>
      <title>{title ? title : "Loading"}</title>
      <meta
        name="keywords"
        content="Izon Voice, Ict, Fashion, Blog, Boungbai Blog, Izon, News, Emmanuel Abraham, Clark Benneth, Justice Johnson, who-be-who-in-ict, Ijaw, Voice, izon voice, ijaw voice"
      />

      <meta name="description" content={description} />
    </Helmet>
  );
};

Head.propTypes = {
  description: Proptypes.string,
  title: Proptypes.string,
};

export default Head;
