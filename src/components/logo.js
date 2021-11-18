import * as React from "react";
import "/src/styles/logo.css";

const Logo = () => {
  return (
    <div class="std-logo-wrapper">
      <div class="square"></div>
      <div class="circle"></div>
      <div class="triangle"></div>
      <div class="rectangle">
        <div class="inner-square"></div>
        <div class="inner-rect"></div>
      </div>
      <div class="animated-text">
        <h1 class="company-name">RSPNSV</h1>
      </div>
    </div>
  );
};

export default Logo;
