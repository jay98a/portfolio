// src/components/Header.js
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


const user_details = {
  name: 'Jay Shah',
  role: 'Software Developer'
};

const Header = () => {
  return (
    <header className="header">
      <div className="header_name">
        <Link to="/" className="header_name_link">
          <span className="dot"></span> {user_details.name} 
          <span className="role">  ({user_details.role})</span>
        </Link>
      </div>
      <nav>
        <ul>
          <li><a className='add_pipe' href="/Resume">Resume</a></li>
          <li><a className='add_pipe' href="/Projects">Projects</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
