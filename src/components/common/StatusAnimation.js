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
    width: 250px;
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const StatusAnimation = ({ failed, success, loading }) => {
  return (
    <>
      {failed && (
        <AnimationContainer>
          <Lottie
            autoPlay
            animationData={require("../../assets/animations/failed_animation.json")}
            className={`animation`}
          />
        </AnimationContainer>
      )}

      {loading && (
        <AnimationContainer>
          <Lottie
            autoPlay
            animationData={require("../../assets/animations/loading.json")}
            className={`animation`}
            loop
          />
        </AnimationContainer>
      )}

      {success && (
        <AnimationContainer>
          <Lottie
            autoPlay
            animationData={require("../../assets/animations/success_animation.json")}
            className={`animation`}
          />
        </AnimationContainer>
      )}
    </>
  );
};

export default StatusAnimation;
