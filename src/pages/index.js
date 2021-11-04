import * as React from "react";
import Layout from "../components/layout";
import ContentSection from "../components/content-section";
import ContentBox from "../components/content-box";
import Animation from "../components/animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faMoneyBillAlt,
  faUniversalAccess,
} from "@fortawesome/free-solid-svg-icons";

const IndexPage = () => {
  return (
    <Layout>
      <ContentSection style="header-offset main-bkg" innerStyle="anim-overlay">
        <Animation />
      </ContentSection>
      <ContentSection style="secondary-bkg">
        <ContentBox style="main-bkg third">
          <h3>Responsive</h3>
          <FontAwesomeIcon icon={faMobileAlt} className="fa" size="3x" />
          <p>
            A design that works well on every screen from mobile to desktop.
          </p>
        </ContentBox>
        <ContentBox style="main-bkg third">
          <h3>Accessible</h3>
          <FontAwesomeIcon icon={faUniversalAccess} className="fa" size="3x" />
          <p>Ensuring all customers are able to access your message easily.</p>
        </ContentBox>
        <ContentBox style="main-bkg third">
          <h3>Tailored</h3>
          <i class="fas fa-money-bill-alt fa-3x"></i>
          <FontAwesomeIcon icon={faMoneyBillAlt} className="fa" size="3x" />
          <p>
            We'll build a solution to fit your requirements, on time and on
            budget.
          </p>
        </ContentBox>
      </ContentSection>
    </Layout>
  );
};

export default IndexPage;
