import * as React from "react";
import ContentBox from "../components/content-box";
import ContentSection from "../components/content-section";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import AboutText from "/content/about-text.mdx";

const About = () => {
  return (
    <Layout>
      <ContentSection style="main-bkg header-offset" innerStyle="">
        <ContentBox style="third main-bkg">
          <StaticImage
            imgStyle={{ borderRadius: "5px" }}
            alt="multi-coloured image of computer code"
            src="../images/yellow-laptop.jpg"
          />
        </ContentBox>
        <ContentBox style="two-thirds main-bkg left">
          <AboutText />
        </ContentBox>
      </ContentSection>
    </Layout>
  );
};

export default About;
