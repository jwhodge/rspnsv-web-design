import * as React from "react";
import "/src/styles/animation.css";

const Animation = () => {
  return (
    <div class="animation-wrapper">
      <div class="square"></div>
      <div class="circle"></div>
      <div class="triangle"></div>
      <div class="animated-text">
        <p class="we-are">We are responsive ...</p>
        <h1 class="company-name">RSPNSV</h1>
        <p class="tagline">Web Design for Small Business</p>
      </div>
    </div>
  );
};

export default Animation;
