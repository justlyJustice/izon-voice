import styled from "styled-components";
import Lottie from "lottie-react";

const Container = styled.div`
  .animation {
    width: 300px;
  }

  p {
    color: #1137fe;
    font-family: Playfair Display;
    font-size: 20px;
    font-weight: 700;
    margin-top: -40px;
    text-align: center;
  }
`;

const NoResults = () => {
  return (
    <Container>
      <Lottie
        autoPlay
        animationData={require("assets/animations/no-result.json")}
        className="animation"
        loop
      />

      <p>No Posts Yet!</p>
    </Container>
  );
};

export default NoResults;
