import styled from "styled-components";
import Lottie from "lottie-react";

const AnimationContainer = styled.div`
  align-items: center;
  background-color: #f4f4f4;
  bottom: 0;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100000;

  .animation {
    width: 700px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    .animation {
      width: 350px;
    }
  }
`;

const LoadingAnimation = ({ loading }) => {
  return (
    <>
      {loading && (
        <AnimationContainer>
          <Lottie
            className="animation"
            autoPlay
            animationData={require("assets/animations/loading.json")}
            loop
          />
        </AnimationContainer>
      )}
    </>
  );
};

export default LoadingAnimation;
