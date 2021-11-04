import * as React from "react";
import Layout from "../components/layout";
import ContentBox from "../components/content-box";
import ContentSection from "../components/content-section";

const Portfolio = () => {
  return (
    <Layout>
      <ContentSection style="main-bkg header-offset" innerStyle="">
        <ContentBox style="half secondary-bkg">
          <p>Project 1</p>
        </ContentBox>
        <ContentBox style="half secondary-bkg">
          <p>Project 1</p>
        </ContentBox>
      </ContentSection>
      <ContentSection style="main-bkg" innerStyle="">
        <ContentBox style="half main-bkg">
          <p>Project 1</p>
        </ContentBox>
        <ContentBox style="half main-bkg">
          <p>Project 1</p>
        </ContentBox>
      </ContentSection>
    </Layout>
  );
};

export default Portfolio;
