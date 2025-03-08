import React from 'react';
import './Projects.css';

// Import local images
import projectImage1 from '../images/feedback.jpg';
import projectImage2 from '../images/career.jpg';
import projectImage3 from '../images/carrental.jpg';
import projectImage4 from '../images/traffic.jpg';
import projectImage5 from '../images/bank.jpg';

// Import PDF reports
import report1 from '../reports/UserExperience.pdf';
import report2 from '../reports/WebApplication.pdf';
import report3 from '../reports/DataStructure.pdf';
import report4 from '../reports/DigitalComputer.pdf';
import report5 from '../reports/Database.pdf';

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project">
          <div className="image-container">
            <img src={projectImage1} alt="Project 1" />
          </div>
          <h3>Student Feedback System</h3>
          <p>A platform for students to provide anonymous feedback on courses and teaching methods. It helps educators gather insights to enhance their teaching strategies and improve the overall learning experience.</p>
          <a href={report1} target="_blank" rel="noopener noreferrer" className="report-button">Show Project Report</a>
        </div>
        <div className="project">
          <div className="image-container">
            <img src={projectImage2} alt="Project 2" />
          </div>
          <h3>Career Counselling</h3>
          <p>An interactive tool that assists students in exploring career options based on their skills and interests. It connects them with professional counselors for personalized guidance and support in their career paths.</p>
          <a href={report2} target="_blank" rel="noopener noreferrer" className="report-button">Show Project Report</a>
        </div>
        <div className="project">
          <div className="image-container">
            <img src={projectImage3} alt="Project 3" />
          </div>
          <h3>Car Rental System</h3>
          <p>An easy-to-use application for renting vehicles, featuring a searchable database of cars. Users can compare options, book rentals, and make secure payments, streamlining the car rental process.</p>
          <a href={report3} target="_blank" rel="noopener noreferrer" className="report-button">Show Project Report</a>
        </div>
        <div className="project">
          <div className="image-container">
            <img src={projectImage4} alt="Project 4" />
          </div>
          <h3>Smart Traffic Management System</h3>
          <p>A real-time traffic monitoring system that optimizes traffic flow using sensors and cameras. It adjusts traffic signals to reduce congestion and improve travel times in urban areas.</p>
          <a href={report4} target="_blank" rel="noopener noreferrer" className="report-button">Show Project Report</a>
        </div>
        <div className="project">
          <div className="image-container">
            <img src={projectImage5} alt="Project 5" />
          </div>
          <h3>Banking Management System</h3>
          <p>A secure online platform for managing banking operations, including deposits, withdrawals, and account management. It offers robust security features and detailed reporting for a seamless banking experience.</p>
          <a href={report5} target="_blank" rel="noopener noreferrer" className="report-button">Show Project Report</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;