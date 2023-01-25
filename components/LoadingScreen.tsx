import React from "react";

type Props = {};

function LoadingScreen({}: Props) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="dots"></div>
    </div>
  );
}

export default LoadingScreen;
