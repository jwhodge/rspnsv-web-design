import * as React from "react";
import { Link } from "gatsby";
import "/src/styles/global.css";
import logo from "/src/images/rspnsv-transp-lightbg-v3.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faMoneyBillAlt,
  faMoon,
  faSun,
  faUniversalAccess,
} from "@fortawesome/free-solid-svg-icons";

const Rspnsv = () => {
  // Select the button
  const btn = document.querySelector(".btn-toggle");

  // Listen for a click on the button
  btn.addEventListener("click", function () {
    // Then toggle (add/remove) the .dark-theme class to the body
    document.documentElement.classList.toggle("dark-theme");
  });
  return (
    <div class="body">
      <header class="main-bkg">
        <div class="header-wrapper">
          <div class="logo">
            <img
              class="logo-image"
              src={logo}
              alt="Responsive Web Design Logo"
            />
          </div>
          <nav class="main-menu">
            <div class="darkmode">
              <button class="btn-toggle">
                <FontAwesomeIcon icon={faSun} className="fa" size="lg" />
                <FontAwesomeIcon icon={faMoon} className="fa" size="lg" />
              </button>
            </div>
            <ul>
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Services</a>
              <a href="">Portfolio</a>
              <a href="">Contact</a>
            </ul>
          </nav>
        </div>
      </header>
      <div class="content-section header-offset main-bkg">
        <div class="content-wrapper anim-overlay">
          <div class="animation-wrapper">
            <div class="square"></div>
            <div class="circle"></div>
            <div class="triangle"></div>
            <div class="animated-text">
              <p class="we-are">We are responsive ...</p>
              <h1 class="company-name">RSPNSV</h1>
              <p class="tagline">Web Design for Small Business</p>
            </div>
          </div>
        </div>
      </div>
      <div class="content-section secondary-bkg">
        <div class="content-wrapper">
          <div class="content-box third main-bkg">
            <h3>Responsive</h3>
            <FontAwesomeIcon icon={faMobileAlt} className="fa" size="3x" />
            <p>
              A design that works well on every screen from mobile to desktop.
            </p>
          </div>
          <div class="content-box third main-bkg">
            <h3>Accessible</h3>
            <FontAwesomeIcon
              icon={faUniversalAccess}
              className="fa"
              size="3x"
            />

            <p>
              Ensuring all customers are able to access your message easily.
            </p>
          </div>
          <div class="content-box third main-bkg">
            <h3>Tailored</h3>
            <i class="fas fa-money-bill-alt fa-3x"></i>
            <FontAwesomeIcon icon={faMoneyBillAlt} className="fa" size="3x" />
            <p>
              We'll build a solution to fit your requirements, on time and on
              budget.
            </p>
          </div>
        </div>
      </div>
      <footer class="main-bkg">
        <p>Copyright RSPNSV Web Design 2021</p>
      </footer>
    </div>
  );
};

export default Rspnsv;
