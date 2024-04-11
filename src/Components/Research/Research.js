import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "../About/about.css";
import "./research.css"

const Research = () => {
  return (
    <section id="research">
      <h5>Research Items</h5>
      <h2>Research</h2>

      <div className="container">
        <div className="about_cards">
          <article className="about_card">
            <FaAward className="about_icon"></FaAward>
            <h5>Research Interest Score</h5>
            <small>40.5</small>
          </article>

          <article className="about_card">
            <FiUsers className="about_icon"></FiUsers>
            <h5>Citations</h5>
            <small>36</small>
          </article>

          <article className="about_card">
            <VscFolderLibrary className="about_icon"></VscFolderLibrary>
            <h5>h-index</h5>
            <small>2</small>
          </article>
        </div>

        <div className="research_container">
            <article className="research_items">
                <h4>SmartOil: Blockchain and smart contract-based oil supply chain management</h4>
            </article>
            <article className="research_items">
                <h4>Revolutionizing the Industrial Internet of Things Using Blockchain: An Unified Approach</h4>
            </article>
            <article className="research_items">
                <h4>Blockchain for Securing Internet of Things – A Layered Approach</h4>
            </article>
            <article className="research_items">
                <h4>5G and Internet of Things—Integration Trends, Opportunities, and Future Research Avenues</h4>
            </article>
        </div>
      </div>
    </section>
  );
};

export default Research;
