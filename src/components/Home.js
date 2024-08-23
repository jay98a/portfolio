// src/components/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
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
            <button className='resume_btn'>Resume</button>
            <button className='projects_btn'>Projects</button>
            <button className='contact_btn'>Contact</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
