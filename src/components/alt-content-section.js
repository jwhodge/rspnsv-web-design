import * as React from "react";
import { Link } from "gatsby";
import "/src/styles/content-section.css";

const AltContentSection = ({ children }) => {
  return (
    <div class="content-section secondary-bkg">
      <div class="content-wrapper">{children}</div>
    </div>
  );
};

export default AltContentSection;
