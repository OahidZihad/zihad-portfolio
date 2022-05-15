import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Oahid Zihad
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com/oahid.zihad" target="_blank">
          <FaFacebookF></FaFacebookF>
        </a>
        <a href="https://www.linkedin.com/in/oahid-zihad/" target="_blank">
          <BsLinkedin></BsLinkedin>
        </a>
        <a href="https://github.com/OahidZihad" target="_blank">
          <BsGithub></BsGithub>
        </a>
        <a href="https://instagram.com/oahid_zihad/" target="_blank">
          <FiInstagram></FiInstagram>
        </a>
        <a href="https://twitter.com/oahidzihad1" target="_blank">
          <IoLogoTwitter></IoLogoTwitter>
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Oahid Zihad. All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
