import * as React from "react";
import Layout from "../components/layout";
import ContentBox from "../components/content-box";
import ContentSection from "../components/content-section";
import ContentForm from "../components/contact-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <Layout>
      <ContentSection style="main-bkg header-offset double-high" innerStyle="">
        <ContentBox style="third">
          <h1>Contact Us</h1>
          <p class="left">
            If your business needs a new website or you have questions about how
            we can help you, please reach out to us.
          </p>
          <p class="left">
            Use the contact form or connect via our social links below.
          </p>
          <div className="social-box-portrait">
            <a href="#">
              <FontAwesomeIcon className="fa" icon={faFacebook} size="2x" />
            </a>
            <a href="#">
              <FontAwesomeIcon className="fa" icon={faLinkedin} size="2x" />
            </a>
            <a href="#">
              <FontAwesomeIcon className="fa" icon={faInstagram} size="2x" />
            </a>
            <a href="#">
              <FontAwesomeIcon className="fa" icon={faGithub} size="2x" />
            </a>
          </div>
        </ContentBox>
        <ContentBox style="two-thirds left">
          <ContentForm />
        </ContentBox>
      </ContentSection>
    </Layout>
  );
};

export default Contact;
