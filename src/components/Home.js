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
          I'm Jay Shah, a Software Engineer with 3+ years of experience in building scalable software solutions. 
          I specialize in Python, Django, and Apache Kafka, and have led the development of AI-driven tools and microservice architectures. 
          My focus is on optimizing backend systems and creating robust data pipelines to deliver seamless user experiences.
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
