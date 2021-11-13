import * as React from "react";
import "/src/styles/page-body.css";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const dataPageTitle = data.site.siteMetadata.title;
  return (
    <div className="body">
      <title>{dataPageTitle}</title>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
