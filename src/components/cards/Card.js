import styled from "styled-components";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  height: 250px;
  width: 350px;
  margin: 20px;

  .card-image {
    object-fit: cover;
    border-radius: 20px;
    width: 100%;
    height: 150px;
    max-width: 100%;
  }

  .title {
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 24px;
    color: #000000 !important;
  }

  .link {
    color: #000000 !important;
  }

  .para-text {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: justify;
    font-family: Playfair Display;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    color: #393939;
    text-align: justify;
  }

  @media screen and (max-width: 768px) {
    height: fit-content;
    width: 80%;
    max-width: 100%;

    .card-image {
      object-fit: cover;
      border-radius: 20px;
      width: 100%;
      height: 150px;
      max-width: 100%;
    }

    .title {
      font-style: normal;
      font-weight: 800;
      font-size: 20px;
      text-align: center;
      line-height: 24px;
      color: #000000;
    }

    .para-text {
      font-family: Playfair Display;
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 20px;
      color: #393939;
      text-align: center;
    }
  }
`;

const Card = ({ title, paraText, image, slug }) => {
  return (
    <CardContainer>
      <img className="card-image" src={image} alt={image} />

      <div>
        <h3 className="title">
          <Link className="link" to={`/${slug}`}>
            {title}
          </Link>
        </h3>

        <p className="para-text">{paraText}</p>
      </div>
    </CardContainer>
  );
};

export default Card;
