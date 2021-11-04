import * as React from "react";
import Layout from "../components/layout";
import ContentBox from "../components/content-box";
import ContentSection from "../components/content-section";

const Portfolio = () => {
  return (
    <Layout>
      <ContentSection style="main-bkg header-offset" innerStyle="">
        <ContentBox style="full main-bkg">
          <h1>Portfolio</h1>
          <p>
            Hi there! I'm the proud creator of this site, which I built with
            Gatsby.
          </p>
        </ContentBox>
      </ContentSection>
      <ContentSection style="header-offset secondary-bkg" innerStyle="">
        <ContentBox style="two-thirds main-bkg">
          <h1>About</h1>
          <p>
            Hi there! I'm the proud creator of this site, which I built with
            Gatsby.
          </p>
        </ContentBox>
      </ContentSection>
    </Layout>
  );
};

export default Portfolio;
