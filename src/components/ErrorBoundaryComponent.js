import * as React from "react";
import { log } from "logrocket";
import Lottie from "lottie-react";
import styled from "styled-components";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;

  .animation {
    width: 200px;
  }

  h3 {
    color: #ccc;
    font-size: 40px;
  }

  @media screen and (max-width: 768px) {
    padding: 80px;

    h3 {
      text-align: center;
    }
  }
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log(error, "Captured in static getDerived error");
    return { hasError: true };
  }

  componentDidCatch(err) {
    console.log(err, "Captured in error boundary");
  }

  render() {
    if (this.state.hasError) {
      return (
        <Wrapper>
          <div id="animation_container">
            <Lottie
              autoPlay
              animationData={require("assets/animations/service_unavailable.json")}
              className="animation"
              loop
            />
          </div>

          <h3>Service Unavailable!</h3>
        </Wrapper>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
