import React from 'react';
import './Skills.css';

import reactImg from '../images/problemsolving.png';
import javascriptImg from '../images/projectmanagement.webp';
import nodejsImg from '../images/softwaredeveloper.jpg';
import mongodbImg from '../images/leadership.jpg';
import htmlcssImg from '../images/teammanagement.jpg';

import certificate1 from '../certificates/database.png';
import certificate2 from '../certificates/data.png';
import certificate3 from '../certificates/c.png';

const Skills = () => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill">
          <img src={reactImg} alt="React" />
          <p>Problem Solving</p>
        </div>
        <div className="skill">
          <img src={javascriptImg} alt="JavaScript" />
          <p>Project Management</p>
        </div>
        <div className="skill">
          <img src={nodejsImg} alt="Node.js" />
          <p>Aspiring Software Developer</p>
        </div>
        <div className="skill">
          <img src={mongodbImg} alt="MongoDB" />
          <p>Leadership</p>
        </div>
        <div className="skill">
          <img src={htmlcssImg} alt="HTML/CSS" />
          <p>Team Management</p>
        </div>
      </div>
      <br />
      <h2>My Achievements/Certificates</h2>
      <div className="certificates-container">
        <div className="certificate">
          <img src={certificate1} alt="Certificate 1" />
          <a href={certificate1} download className="download-button">Download</a>
        </div>
        <div className="certificate">
          <img src={certificate2} alt="Certificate 2" />
          <a href={certificate2} download className="download-button">Download</a>
        </div>
        <div className="certificate">
          <img src={certificate3} alt="Certificate 3" />
          <a href={certificate3} download className="download-button">Download</a>
        </div>
      </div>
    </section>
  );
};

export default Skills;