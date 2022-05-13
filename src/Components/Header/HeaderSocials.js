import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaDribbble } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin></BsLinkedin>
      </a>
      <a href="https://github.com" target="_blank">
        <BsGithub></BsGithub>
      </a>
      <a href="https://gmail.com" target="_blank">
        <FaDribbble></FaDribbble>
      </a>
    </div>
  );
};

export default HeaderSocials;
