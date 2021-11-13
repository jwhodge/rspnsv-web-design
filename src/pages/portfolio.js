import * as React from "react";
import Layout from "../components/layout";
import ContentBox from "../components/content-box";
import ContentSection from "../components/content-section";
import { StaticImage } from "gatsby-plugin-image";

const Portfolio = () => {
  return (
    <Layout>
      <ContentSection style="main-bkg header-offset" innerStyle="">
        <ContentBox style="half">
          <StaticImage
            imgStyle={{ borderRadius: "5px" }}
            alt="multi-coloured image of computer code"
            src="../images/stars-in-a-jar.jpg"
          />
          <h2 className="over-image">Stellar Jewellery</h2>
        </ContentBox>
        <ContentBox style="half">
          <StaticImage
            imgStyle={{ borderRadius: "5px" }}
            alt="multi-coloured image of computer code"
            src="../images/laptop-partially-open.jpg"
          />
          <h2 className="over-image">Online Discovery</h2>
        </ContentBox>
      </ContentSection>
      <ContentSection style="main-bkg" innerStyle="">
        <ContentBox style="half">
          <StaticImage
            imgStyle={{ borderRadius: "5px" }}
            alt="multi-coloured image of computer code"
            src="../images/laptop-wp.jpg"
          />
          <h2 className="over-image">Custom WordPress Site</h2>
        </ContentBox>
        <ContentBox style="half">
          <StaticImage
            imgStyle={{ borderRadius: "5px" }}
            alt="multi-coloured image of computer code"
            src="../images/mtb-in-trees.jpg"
          />
          <h2 className="over-image">HK MTB Adventure</h2>
        </ContentBox>
      </ContentSection>
    </Layout>
  );
};

export default Portfolio;
