import React from "react";

const loading = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
      </div>
    </div>
  );
};

export default loading;
