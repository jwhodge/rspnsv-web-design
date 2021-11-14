import * as React from "react";
import Layout from "../components/layout";
import ContentSection from "../components/content-section";
import ContentBox from "../components/content-box";
import Animation from "../components/animation";
import HPSite from "/content/home-page-site.mdx";
import HPDesign from "/content/home-page-designer.mdx";
import HPTech from "/content/home-page-technical.mdx";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faMobileAlt,
  faMoneyBillAlt,
  faUniversalAccess,
} from "@fortawesome/free-solid-svg-icons";

const IndexPage = () => {
  return (
    <Layout>
      <ContentSection
        style="header-offset main-bkg"
        innerStyle="vert-ctr anim-overlay"
      >
        <Animation />
        <FontAwesomeIcon
          icon={faCaretDown}
          className="fa"
          id="down-arrow"
          size="3x"
        />
      </ContentSection>
      <ContentSection style="secondary-bkg" innerStyle="">
        <ContentBox style="two-thirds left">
          <HPSite />
          <div className="btn">
            <button className="sec-btn">Contact Us Now</button>
          </div>
        </ContentBox>
        <ContentBox style="third image-only">
          <StaticImage
            imgStyle={{ borderRadius: "5px" }}
            alt="multi-coloured image of computer code"
            src="../images/dense-code-image.jpg"
          />
        </ContentBox>
      </ContentSection>
      <ContentSection style="main-bkg" innerStyle="">
        <ContentBox style="third image-only">
          <StaticImage
            imgStyle={{ borderRadius: "5px" }}
            alt="multi-coloured image of computer code"
            src="../images/dense-code-image.jpg"
          />
        </ContentBox>
        <ContentBox style="two-thirds left">
          <HPDesign />
          <div className="btn">
            <button className="sec-btn">Learn About Site Types</button>
          </div>
        </ContentBox>
      </ContentSection>
      <ContentSection style="secondary-bkg" innerStyle="">
        <ContentBox style="two-thirds left">
          <HPTech />
          <div className="btn">
            <button className="sec-btn">Get A Quote Now</button>
          </div>
        </ContentBox>
        <ContentBox style="third image-only">
          <StaticImage
            imgStyle={{ borderRadius: "5px" }}
            alt="multi-coloured image of computer code"
            src="../images/dense-code-image.jpg"
          />
        </ContentBox>
      </ContentSection>
    </Layout>
  );
};

export default IndexPage;
