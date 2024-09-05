import React from "react";

export const Banner = () => {
  return (
    <div
      className="py-3 text-center"
      style={{
        background:
          "linear-gradient(to right, #FCD6FF, #FFFD80, #F89ABF, #FCD6FF)",
      }}
    >
      <div className="container">
        <p className="font-medium">
          <span className="hidden sm:inline">
            Intoducing a completely redesigned interface -{" "}
          </span>
          <a href="#" className="underline underline-offset-4">
            Explore the demo
          </a>
        </p>
      </div>
    </div>
  );
};
