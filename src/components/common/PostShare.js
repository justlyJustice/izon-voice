import PropTypes from "prop-types";
import styled from "styled-components";
import {
  EmailShareButton,
  EmailIcon,
  FacebookIcon,
  FacebookShareButton,
  TelegramShareButton,
  TelegramIcon,
  TwitterIcon,
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const Wrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  top: 35%;
  position: fixed;
`;

function PostShare({ url, title, hashtags }) {
  return (
    <Wrapper>
      <EmailShareButton
        url={url ? url : ""}
        quote={title ? title : ""}
        hashtag={hashtags ? hashtags : ["#"]}
      >
        <EmailIcon size={36} />
      </EmailShareButton>

      <FacebookShareButton
        url={url ? url : ""}
        quote={title ? title : ""}
        hashtag={hashtags ? hashtags : ["#"]}
      >
        <FacebookIcon size={36} />
      </FacebookShareButton>

      <WhatsappShareButton
        url={url ? url : ""}
        quote={title ? title : ""}
        hashtag={hashtags ? hashtags : ["#"]}
      >
        <WhatsappIcon size={36} />
      </WhatsappShareButton>

      <TwitterShareButton
        url={url ? url : ""}
        title={title ? title : "title"}
        hashtags={hashtags ? hashtags : ["#hashtags"]}
      >
        <TwitterIcon size={36} />
      </TwitterShareButton>

      <TelegramShareButton
        url={url ? url : ""}
        title={title ? title : "title"}
        hashtags={hashtags ? hashtags : ["#hashtags"]}
      >
        <TelegramIcon size={36} />
      </TelegramShareButton>
    </Wrapper>
  );
}

PostShare.propTypes = {
  url: PropTypes.string.isRequired,
  hashtags: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PostShare;
