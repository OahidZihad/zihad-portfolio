import React from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/me333.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I am</h5>
        <h1>Oahid Zihad</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA></CTA>

        <HeaderSocials></HeaderSocials>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
