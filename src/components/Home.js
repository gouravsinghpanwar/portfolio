import React from 'react';
import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa';
import '../styles/Home.css';
import profileImage from '../images/profile.jpg';

const Home = () => {
  return (
    <section className="home">
      <div className="left-side">
        <h1>
          I’m <span className="name">Gourav Singh Panwar</span>
        </h1>
        <p className="running-lines">a B.Tech student with a passion for turning ideas into reality. Join me on my journey as I explore the world of technology and innovation!</p>
        
        <div className="social-icons">
          <a href="https://github.com/gouravsinghpanwar" target="_blank" rel="noopener noreferrer" className="icon-circle">
            <FaGithub />
          </a>
          <a href="mailto:panwargourav798@gmail.com" className="icon-circle">
            <FaRegEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/gourav-panwar-ba614727a" target="_blank" rel="noopener noreferrer" className="icon-circle">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="right-side">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
    </section>
  );
};

export default Home;