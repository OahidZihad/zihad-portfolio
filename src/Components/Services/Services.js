import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Graphics Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon"></BiCheck>
              <p>Add realistic effects.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"></BiCheck>
              <p>Product photo retouching.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"></BiCheck>
              <p>Adjust contrast or light of images.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"></BiCheck>
              <p>Minimalist beautiful logo design.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"></BiCheck>
              <p>Vectorization of images and logos.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon"></BiCheck>
              <p>Fully Functional Website.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"></BiCheck>
              <p>Responsive Design</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"></BiCheck>
              <p>Fresh and eyecatchy frontend.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"></BiCheck>
              <p>NoSQL Database managed by MongoDB.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"></BiCheck>
              <p>Clean and reusable source code.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"></BiCheck>
              <p>Design customization based on the API.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon"></BiCheck>
              <p>Content writing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"></BiCheck>
              <p>Create project report.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"></BiCheck>
              <p>Keyword research for any niche.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"></BiCheck>
              <p>Caption for each post in social media.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"></BiCheck>
              <p>Good quality report based on products.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
