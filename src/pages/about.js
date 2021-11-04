import * as React from "react";
import ContentBox from "../components/content-box";
import ContentSection from "../components/content-section";
import Layout from "../components/layout";

const About = () => {
  return (
    <Layout>
      <ContentSection style="main-bkg header-offset" innerStyle="">
        <ContentBox style="third main-bkg">
          <h1>Stuff</h1>
        </ContentBox>
        <ContentBox style="two-thirds main-bkg">
          <h1>About</h1>
          <p>
            Fusce placerat eget velit a pharetra. Sed dignissim est eget ligula
            tincidunt aliquet vitae non ligula. Integer nec erat vitae erat
            cursus pellentesque. Nullam sed mollis eros, sit amet semper libero.
            Etiam laoreet nisl quis lorem consectetur, in feugiat arcu faucibus.
            Integer venenatis quam semper turpis vulputate commodo. Aliquam
            porta egestas turpis quis vehicula. Vestibulum ut gravida erat,
            euismod cursus augue. Praesent faucibus nulla ipsum, imperdiet
            malesuada dui ullamcorper at. Nulla est erat, vulputate et elit et,
            egestas euismod lacus. Aliquam faucibus commodo elit quis sagittis.
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

export default About;
