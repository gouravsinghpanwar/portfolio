import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import resume from './resume.pdf'; 

const Header = () => {
  return (
    <nav className="header">
      <div className="header-container">
        <ul>
          <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">Education</NavLink></li>
          <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
          <li><NavLink to="/skills" activeClassName="active">Skills</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        </ul>
        <div>
          <a href={resume} download className="download-button">Download Resume</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;