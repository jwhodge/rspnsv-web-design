import * as React from "react";
import ContentBox from "../components/content-box";
import ContentSection from "../components/content-section";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const About = ({ data }) => {
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
          <h1>{data.mdx.frontmatter.title}</h1>
          <p>{data.mdx.frontmatter.date}</p>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </ContentBox>
      </ContentSection>
    </Layout>
  );
};

export const query = graphql`
  query AboutQuery {
    mdx(id: { eq: "2beceed8-2cfe-5ec1-8d91-06132a10e271" }) {
      frontmatter {
        title
        date
      }
      body
      slug
    }
  }
`;

export default About;
