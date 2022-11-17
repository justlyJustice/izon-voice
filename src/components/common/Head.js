import { logo } from "assets/images";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

// const metaDecorator = require("config/metaDecorator");

const Head = ({ image, title, quote, description, hashtag }) => {
  let location = useLocation();
  let currentUrl = "http://www.izonvoice.ng" + location.pathname;
  let postQuote = quote !== undefined ? quote : "";
  let postTitle = title !== undefined ? title : "IzonVoice";
  let postImage = image !== undefined ? image : logo;
  let postDesc =
    description !== undefined
      ? description
      : "Return right in and hear from some cool voices around the globe";
  let postHashtag = hashtag !== undefined ? hashtag : "#izonvoice";

  return (
    <Helmet>
      {/*  <title>{title}</title>
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
      /> */}
      <title>{postTitle}</title>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="csrf_token" content="" />
      <meta property="type" content="website" />
      <meta property="url" content={currentUrl} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="_token" content="" />
      <meta name="robots" content="noodp" />
      <meta property="title" content={postTitle} />
      <meta property="quote" content={postQuote} />
      <meta name="description" content={postDesc} />
      <meta property="image" content={postImage} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:quote" content={quote} />
      <meta property="og:hashtag" content={postHashtag} />
      <meta property="og:image" content={postImage} />
      <meta content="image/*" property="og:image:type" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="IzonVoice" />
      <meta property="og:description" content={postDesc} />{" "}
    </Helmet>
  );
};

export default Head;
