// src/components/Home.js
import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <section id="home" className="home">
      <div className="intro">
        <div className="photo"></div>
        <div className="intro-text">
          <h1>Hello</h1>
          <p className='bold_text'>A Bit About Me</p>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. I'm a great place for you to tell a story and let your users know a little more about you.
          </p>
            <button className='resume_btn' onClick={() => navigate('/resume')}>Resume</button>
            <button className='projects_btn' onClick={() => navigate('/projects')}>Projects</button>
            <button className='contact_btn' onClick={() => navigate('/contact')}>Contact</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
