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

      <div className="container">
        <div className="about_cards">
          <article className="about_card">
            <FaAward className="about_icon"></FaAward>
            <h5>Experience</h5>
            <small>2.5+ Years Working</small>
          </article>

          <article className="about_card">
            <FiUsers className="about_icon"></FiUsers>
            <h5>Clients</h5>
            <small>7+ Worldwide</small>
          </article>

          <article className="about_card">
            <VscFolderLibrary className="about_icon"></VscFolderLibrary>
            <h5>Projects</h5>
            <small>10+ Completed</small>
          </article>
        </div>
        
        <div className="about_container">
          <div className="about_me">
            <div className="about_me-image">
              <img src={ME} alt="" />
            </div>
          </div>

          <div className="about_content">
            <p>
              I am a passionate and experienced frontend web developer with a
              strong focus on delivering outstanding user experiences. With over
              2.5 years of professional experience, I have worked on a diverse
              range of projects, including e-commerce platforms and ERP-based
              software solutions for the garments industry. <br /><br /> My technical
              expertise lies in JavaScript and TypeScript, enabling me to build
              dynamic and interactive web applications. I have extensive
              knowledge of popular frontend frameworks and libraries,
              particularly React, and have utilized Material-UI (MUI),
              Bootstrap, and Tailwind CSS to create responsive and visually
              appealing user interfaces. <br /><br /> As a developer, I understand the
              importance of data management, and I am proficient in working with
              MongoDB, a NoSQL database, to store and retrieve information
              efficiently. Moreover, I have hands-on experience with Amazon Web
              Services (AWS), specifically Lambda functions, to develop
              serverless applications and deploy them in the cloud. <br /><br />{" "}
              Throughout my career, I have consistently demonstrated my ability
              to collaborate effectively with cross-functional teams, ensuring
              seamless integration of frontend components with backend systems.
              I am adept at translating design mockups and wireframes into
              pixel-perfect implementations, paying close attention to detail
              and usability. <br /><br /> Passionate about staying up to date with the
              latest industry trends and best practices, I am committed to
              continuous learning and improvement. I thrive in a fast-paced and
              agile environment, where I can contribute my skills to drive
              innovative solutions and deliver high-quality results. <br /><br /> If
              you are seeking a frontend web developer who is skilled in
              JavaScript, TypeScript, MUI, Bootstrap, Tailwind, MongoDB, and
              AWS, I would be thrilled to discuss how my expertise can
              contribute to your projects. Feel free to reach out to me for
              collaboration opportunities or to learn more about my work.
            </p>

            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
