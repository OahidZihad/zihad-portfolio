import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Care-Box Ltd. (Production Level E-commerce)</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://care-box.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Day to Communications | Marketing SaaS Tool</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://day2communications.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Yoom Zoom</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://yoom-zoom.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Modern Fitness Exercises Application</h3>
          <div className="portfolio_item-cta">
            {/* <a
              href="https://github.com/OahidZihad/restaurant-boots"
              target="_blank"
              className="btn"
              rel="noreferrer"
            >
              Github
            </a> */}
            <a
              href="https://selfgym.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Restaurant Landing Page</h3>
          <div className="portfolio_item-cta">
            {/* <a
              href="https://github.com/OahidZihad/burj-al-arab-motel"
              target="_blank"
              className="btn"
              rel="noreferrer"
            >
              Github
            </a> */}
            <a
              href="https://boots-foodies.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Doctor's Appointment</h3>
          <div className="portfolio_item-cta">
            {/* <a
              href="https://github.com/OahidZihad/doctors-chember"
              target="_blank"
              className="btn"
              rel="noreferrer"
            >
              Github
            </a> */}
            <a
              href="https://goodsmiledental.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
