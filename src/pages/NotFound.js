import { Link } from "react-router-dom";
import styled from "styled-components";

import { logo } from "assets/images";

const Container = styled.section`
  display: grid;
  grid-template-columns: 2fr 3fr;
  height: 100vh;

  @media screen and (max-width: 768px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around !important;
  }
`;

const LeftDiv = styled.div`
  align-items: center;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    width: 250px;
    height: 250px;
  }

  div {
    display: inline-block !important;
    text-align: left;
  }

  span {
    font-size: 12px;
  }

  @media screen and (max-width: 768px) {
    background-color: transparent;
  }
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 80px;

  h2 {
    color: #ccc;
    font-size: 120px;
    line-height: 90px;
  }

  p {
    font-family: Playfair Display;
    font-weight: 600;
    font-size: 20px;
  }

  .link {
    width: 200px;
    background-color: rgba(234, 25, 25, 0.7);
    color: white;
    margin: 15px 0px;
    padding: 20px;
  }

  @media screen and (max-width: 768px) {
    h2 {
      text-align: center;
    }

    p {
      text-align: center;
    }

    .link {
      text-align: center;
      width: 350px;
    }
  }
`;

const NotFound = () => {
  return (
    <Container>
      <LeftDiv>
        <img className="logo" src={logo} alt="Izon voice logo" />
        <p>&copy; Izon voice, 2022</p>
      </LeftDiv>

      <RightDiv>
        <h2>404</h2>
        <p>Page not found!</p>

        <Link className="link" to="/home">
          <i className="fa fa-arrow-left"></i> Back to home
        </Link>
      </RightDiv>
    </Container>
  );
};

export default NotFound;
