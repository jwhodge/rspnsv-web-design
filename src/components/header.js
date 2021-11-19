import * as React from "react";
import { Link } from "gatsby";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import "/src/styles/header.css";
import Logo from "../components/logo";

const Header = () => {
  return (
    /* Header Bar */
    <header class="main-bkg">
      <div class="header-wrapper">
        <Link to="/">
          <Logo />
        </Link>
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
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
            <button>Get Started</button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
