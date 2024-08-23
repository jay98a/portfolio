// src/components/Header.js
import React from 'react';
import './Header.css';

const user_details = {
  name: 'Jay Shah',
  role: 'Software Developer'
};

const Header = () => {
  return (
    <header className="header">
      <div className="header_name">
        <span className="dot"></span> {user_details.name} <span className="role">({user_details.role})</span>
      </div>
      <nav>
        <ul>
          <li><a href="#home">Resume</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
