import * as React from "react";
import Layout from "../components/layout";
import ContentBox from "../components/content-box";
import ContentSection from "../components/content-section";
import { StaticImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";

const Services = ({ data }) => {
  return (
    <Layout>
      <ContentSection style="main-bkg header-offset" innerStyle="">
        <ContentBox style="two-thirds left">
          <h1>{data.mdx.frontmatter.title}</h1>
          <p>{data.mdx.frontmatter.date}</p>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
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
          <h2>Static Sites</h2>
          <p>
            These are fast, simple clear sites where the content doesn't change
            regularly.
          </p>
          <p>
            Static sites are optimised to be easily found in a search and load
            the information quickly.
          </p>
          <p>
            They are best used to make sure a customer can contact you, and find
            information about your services and real world location.
          </p>
          <ul className="custom-indent">
            <li>Easy to optimise for search engines</li>
            <li>Easy to maintain</li>
            <li>Single or multi-page</li>
            <li>Can be challenging to update content</li>
            <li>Built in HTML, Gatsby or React</li>
          </ul>
          <div className="btn">
            <button className="sec-btn">Learn More</button>
            <button className="sec-btn">Get a quote</button>
          </div>
        </ContentBox>
      </ContentSection>
      <ContentSection style="main-bkg" innerStyle="">
        <ContentBox style="two-thirds left">
          <h2>Dynamic Sites</h2>

          <p>
            These are flexible and easy to manage if you want to change, add and
            update information regularly.
          </p>

          <p>
            If you want to provide information, catalogue products or interact
            with your customers this is the solution for you.
          </p>
          <ul className="custom-indent">
            <li>Built in search engine optimisation tools</li>
            <li>Can hold a lot of information</li>
            <li>Content easily managed in house</li>
            <li>Can be slower to load</li>
            <li>Require a some regular technical maintenance</li>
            <li>Typically built in WordPress</li>
          </ul>
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
          <h2>E-commerce Sites</h2>
          <p>
            These bring the act of buying and selling your products into the
            online space.
          </p>
          <p>
            They share a lot in common with dynamic sites but focus on
            streamlining the presentation and sales of your products.
          </p>
          <p>
            We can also integrate an e-commerce solution with either of the
            above solutions.
          </p>
          <ul className="custom-indent">
            <li>Easy to manage and sell goods online</li>
            <li>Can integrate with existing sites</li>
            <li>A variety of solutions available</li>
            <li>Can be slow to load content</li>
            <li>Typically built on WooCommerce or Shopify</li>
          </ul>
          <div className="btn">
            <button className="sec-btn">Learn More</button>
            <button className="sec-btn">Get a quote</button>
          </div>
        </ContentBox>
      </ContentSection>
    </Layout>
  );
};

export const query = graphql`
  query ServicesQuery {
    mdx(slug: { eq: "service-text" }) {
      frontmatter {
        title
        date
      }
      body
      slug
    }
  }
`;

export default Services;
