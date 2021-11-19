import * as React from "react";
import { Link } from "gatsby";
import "/src/styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faCaretUp,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    /* Header Bar */
    <footer>
      <div class="footer-wrapper">
        <nav class="footer-menu">
          <ul className="no-indent">
            <Link to="#">
              <FontAwesomeIcon icon={faArrowUp} /> Top
            </Link>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
          </ul>
        </nav>
        <div class="footer-notes">
          <div className="social-box-horizontal">
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
          <p>
            <FontAwesomeIcon icon={faCopyright} /> RSPNSV Web Design 2021
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
