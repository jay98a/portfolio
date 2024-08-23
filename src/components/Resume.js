// src/components/Resume.js
import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <h2>Resume</h2>
      <div className="work-experience">
        <h3>Work Experience</h3>
        <ul>
          <li>
            <span>2035 - Present</span>
            <h4>Editor</h4>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
            </p>
          </li>
          <li>
            <span>2035 - 2035</span>
            <h4>Writer at Large</h4>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
            </p>
          </li>
          <li>
            <span>2035 - 2035</span>
            <h4>Intern</h4>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
