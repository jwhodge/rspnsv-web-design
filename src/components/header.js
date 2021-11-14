import * as React from "react";
import { Link } from "gatsby";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import "/src/styles/header.css";
import logo from "/src/images/rspnsv-transp-lightbg-v3.webp";

const Header = () => {
  return (
    /* Header Bar */
    <header class="main-bkg">
      <div class="header-wrapper">
        <div class="logo">
          <img class="logo-image" src={logo} alt="Responsive Web Design Logo" />
        </div>
        <nav class="main-menu">
          <div class="darkmode">
            <ThemeToggler>
              {({ theme, toggleTheme }) => (
                <div className="dark-button">
                  <input
                    type="checkbox"
                    id="toggle"
                    onChange={(e) =>
                      toggleTheme(e.target.checked ? "dark" : "light")
                    }
                    checked={theme === "dark"}
                  />{" "}
                  <label for="toggle"></label>
                </div>
              )}
            </ThemeToggler>
          </div>
          <ul className="no-indent">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
