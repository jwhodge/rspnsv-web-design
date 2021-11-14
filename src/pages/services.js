import * as React from "react";
import Layout from "../components/layout";
import ContentBox from "../components/content-box";
import ContentSection from "../components/content-section";
import { StaticImage } from "gatsby-plugin-image";
import OurServices from "/content/service-text.mdx";
import StaticSites from "/content/static-sites.mdx";
import DynamicSites from "/content/dynamic-sites.mdx";
import EComSites from "/content/ecom-sites.mdx";

const Services = () => {
  return (
    <Layout>
      <ContentSection style="main-bkg header-offset" innerStyle="">
        <ContentBox style="two-thirds left">
          <OurServices />
          <button class="btn">Click Here</button>
        </ContentBox>
        <ContentBox style="third image-only">
          <StaticImage
            imgStyle={{ borderRadius: "5px" }}
            alt="multi-coloured image of computer code"
            src="../images/phone-monitor.jpg"
          />
        </ContentBox>
      </ContentSection>
      <ContentSection style="secondary-bkg" innerStyle="">
        <ContentBox style="third image-only">
          <StaticImage
            imgStyle={{ borderRadius: "5px" }}
            alt="multi-coloured image of computer code"
            src="../images/dense-code-image.jpg"
          />
        </ContentBox>
        <ContentBox style="two-thirds left">
          <StaticSites />
          <div className="btn">
            <button className="sec-btn">Learn More</button>
            <button className="sec-btn">Get a quote</button>
          </div>
        </ContentBox>
      </ContentSection>
      <ContentSection style="main-bkg" innerStyle="">
        <ContentBox style="two-thirds left">
          <DynamicSites />
          <div className="btn">
            <button>Learn More</button>
            <button>Get a quote</button>
          </div>
        </ContentBox>
        <ContentBox style="third image-only">
          <StaticImage
            imgStyle={{ borderRadius: "5px" }}
            alt="multi-coloured image of computer code"
            src="../images/e-commerce-clothes.jpg"
          />
        </ContentBox>
      </ContentSection>
      <ContentSection style="secondary-bkg" innerStyle="">
        <ContentBox style="third image-only">
          <StaticImage
            imgStyle={{ borderRadius: "5px" }}
            alt="multi-coloured image of computer code"
            src="../images/ccard.jpg"
          />
        </ContentBox>
        <ContentBox style="two-thirds left">
          <EComSites />
          <div className="btn">
            <button className="sec-btn">Learn More</button>
            <button className="sec-btn">Get a quote</button>
          </div>
        </ContentBox>
      </ContentSection>
    </Layout>
  );
};

export default Services;
