import React from "react";
import "./about.css";
import ME from "../../assets/me222.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon"></FaAward>
              <h5>Experience</h5>
              <small>1.5+ Years Working</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon"></FiUsers>
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon"></VscFolderLibrary>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            A passionate web developer. For more than 1 year, I’ve worked on
            various projects involving both front-end and back-end development.
            I am a quick learner with a dream to build professional projects
            from scratch. I started a journey hoping for successful career with
            great ambition. Enjoy challenging tasks and innovative projects
            under pressure brings the best out of me.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
