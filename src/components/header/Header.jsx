import React from "react";
import styles from "./styles.css";

import logo from "../../images/logo.jpg";

function Header() {
  return (
    <header>
      <nav>
        <a href="https://www.availity.com">
          <img src={logo} className="logo" alt="logo" />
        </a>
        <a className="about-us" href="https://www.availity.com/History">
          about us
        </a>
      </nav>
    </header>
  );
}

export default Header;
