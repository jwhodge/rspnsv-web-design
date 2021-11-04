import * as React from "react";
import { Link } from "gatsby";
import "/src/styles/content-section.css";

const ContentSection = ({ style, innerStyle, children }) => {
  const section = style + " content-section";
  const wrapper = innerStyle + " content-wrapper";
  return (
    <div class={section}>
      <div class={wrapper}>{children}</div>
    </div>
  );
};

export default ContentSection;
