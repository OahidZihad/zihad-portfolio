import React from "react";
import "./education.css";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education">
      <h5>My Completed Degrees</h5>
      <h2>Education</h2>

      <div className="container education_container">
        <div className="edu_1">
          <FaGraduationCap className="edu_details-icon"></FaGraduationCap>
          <p>Passing Year: 2021</p>
          <h2>Bachelor of Science in CSE</h2>
          <p>Computer Science & Engineering</p>
          <p>North South University</p>
          <h5>CGPA: 3.31 out of 4.00</h5>
        </div>

        <div className="edu_2">
          <FaGraduationCap className="edu_details-icon"></FaGraduationCap>
          <p>Passing Year: 2016</p>
          <h2>Higher Secondary Certificate</h2>
          <p>Group: Science</p>
          <p>Gaibandha Govt. College</p>
          <h5>GPA: 5.00 out of 5.00</h5>
        </div>

        <div className="edu_3">
          <FaGraduationCap className="edu_details-icon"></FaGraduationCap>
          <p>Passing Year: 2014</p>
          <h2>Secondary School Certificate</h2>
          <p>Group: Science</p>
          <p>Ahammad Uddin Shah Shishu Niketan School & College, Gaibandha</p>
          <h5>GPA: 5.00 out of 5.00</h5>
        </div>
      </div>
    </section>
  );
};

export default Education;
