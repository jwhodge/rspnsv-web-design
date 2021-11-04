import * as React from "react";
import "/src/styles/page-body.css";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="body">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
