import * as React from "react";
import { Link } from "gatsby";
import "/src/styles/content-box.css";

const ContentBox = ({ style, children }) => {
  const box = style + " content-box";
  return <div className={box}>{children}</div>;
};

export default ContentBox;
