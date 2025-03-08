import React from 'react';
import './About.css';
import collegeIcon from '../images/collegeicon.png'; 
import schoolIcon from '../images/schoolicon.png';

const About = () => {
  return (
    <section className="about">
      
      <h2>My Education Details</h2>
      <div className="education-container">
        <div className="education-box">
          <img src={collegeIcon} alt="College" className="education-icon" />
          <h3>Avantika University</h3>
          <br></br>
          <p>Degree: Bachelor of Technology</p>
          <p>Year: 2018 - 2022</p>
          <p>Specialization: Computer Science</p>
          <p>CGPA: 8.5</p>
        </div>
        
        <div className="education-box">
          <img src={schoolIcon} alt="School" className="education-icon" />
          <h3>Kalidas Montessorri Senior Secondary School</h3>
          <p>Year: 2022</p>
          <p>12th Grade</p>
          <p>Stream: Science</p>
          <p>Percentage: 83%</p>
        </div>
        
        <div className="education-box">
          <img src={schoolIcon} alt="School" className="education-icon" />
          <h3>Kalidas Montessorri Senior Secondary School</h3>
          <p>Year: 2020</p>
          <p>10th Grade</p>
          <p>Board: CBSE</p>
          <p>Percentage: 85%</p>
        </div>
      </div>
    </section>
  );
};

export default About;