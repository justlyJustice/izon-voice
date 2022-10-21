import React from "react";

function LoadingPlaceHolder(props) {
  const loaderStyles = {
    backgroundColor: "#eee",
    height: "100%",
    width: "100%",
    overflow: "hidden",
    position: "relative",
    ...props.extraStyles,
  };

  const loaderSwipeStyles = {
    animation: "loaderSwipeAnim 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite",
    background:
      "linear-gradient(to right, #eeeeee 10%, #dddddd 50%, #eeeeee 90%)",
    position: "absolute",
    top: "0",
    height: "100%",
    left: "0",
    width: "100%",
  };

  return (
    <div style={loaderStyles} className={`loadingSwipes`}>
      <div style={loaderSwipeStyles}></div>
    </div>
  );
}

export default LoadingPlaceHolder;
