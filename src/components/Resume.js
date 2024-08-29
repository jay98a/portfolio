// src/components/Resume.js
import React from 'react';
import './Resume.css';

const WorkExperience = ({ jobTitle, company, timePeriod, description, responsibilities }) => (
  <div>
    <span>{timePeriod}</span>
    <h4>{jobTitle} ({company})</h4>
    <h5 className='italic_sub_line'>{description}</h5>
    <ul>
      {responsibilities.map((item, index) => (
        <li className='bullet_point' key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const Education = ({ degree, institution, timePeriod, coursework }) => (
  <div>
    <span>{timePeriod}</span>
    <h4>{degree}</h4>
    <h5 className='italic_sub_line'>{institution}</h5>
    <ul>
      {/* <li className='bullet_point'>{coursework}</li> */}
    </ul>
  </div>
);

const Resume = () => {
  const workExperiences = [
    {
      jobTitle: "Software Developer",
      company: "Linepal",
      timePeriod: "July 2024 - Present",
      description: "Backend development and server-side optimization for high-performance applications",
      responsibilities: [
        "Deployed a Django-based backend on a Contabo server, handling over 1,000 daily active users with 99.9% uptime, using Gunicorn and Nginx for optimal performance.",
        "Optimized PostgreSQL database queries, reducing data retrieval times by 20%, leading to faster load times and improved user experience.",
        "Implemented and maintained cron jobs for automated database operations and daily backups, ensuing 100% data integrity and reduced manual interventions."
      ]
    },
    {
      jobTitle: "Software Engineer",
      company: "Viral Nation Inc.",
      timePeriod: "January 2023 - March 2024",
      description: "Design and implementation of API, software architecture and data pipelines in Microservices team",
      responsibilities: [
        "Led a team of 4 developers to create Social Listening, an AI-powered SaaS tool used by Walmart and Loreal, for Trend and keyword analysis.",
        "Implemented a data pipeline with Apache Kafka, reducing product turnaround time by 85% and increasing throughput by 60%.",
        "Developed ETL pipelines for processing post and comment data based on keywords from major social media platforms.",
        "Transitioned from REST API-based analysis to Kafka data streaming for ML-based content analysis, reducing latency by 40% and significantly enhancing data processing capabilities for real-time insights.",
        "Automated social media data fetching on daily bases with Node.js cron jobs and Azure Cloud Functions, ensuring daily data collection and analysis for the dashboard.",
      ]
    },
    {
      jobTitle: "Software Developer",
      company: "Vinay Industries",
      timePeriod: "Auguest 2020 - February 2021",
      description: "Design and Development of Warranty Handling Application named CB Warranty from scratch",
      responsibilities: [
        "Conceptualized and spearheaded the development of Warranty Handling Application named CB Warranty from scratch, employing Agile and SCRUM methodology for efficient project management.",
        "Transformed the warranty tracking and handling for the business, resulting in a 45% faster warranty management and customer service.",
      ]
    },
    {
      jobTitle: "Software Developer - Intern",
      company: "Manan Graphics",
      timePeriod: "July 2019 - December 2019",
      description: "Web Development Project - Internship",
      responsibilities: [
        "Conceived and crafted a website from requirements to deployment, significantly expanding the customer base with a 30% increase in potential customers for the business.",
        "Created and documented 5 Django API endpoints, integrating backend responses with the webpage to support different responses.",
      ]
    }
  ];

  const educationDetails = [
    {
      degree: "MSc. in Computer Science",
      institution: "Lakehead University, Thunder Bay, Ontario",
      timePeriod: "2020 - 2021",
      // coursework: "Data Structures, Algorithms, Operating Systems, Database Management Systems, Computer Networks, Software Engineering, Web Development, Machine Learning, Artificial Intelligence"
    },
    {
      degree: "Bachelor of Technology - Computer Engineering",
      institution: "Gujarat Technilogical University, Gujarat, India",
      timePeriod: "2020 - 2021",
      // coursework: "Data Structures, Algorithms, Operating Systems, Database Management Systems, Computer Networks, Software Engineering, Web Development, Machine Learning, Artificial Intelligence"
    },
  ];

  return (
    <section id="resume" className="resume">
      <h2>Resume</h2>
      <div className="work-experience">
        <h3>Work Experience</h3>
        {workExperiences.map((experience, index) => (
          <WorkExperience key={index} {...experience} />
        ))}
      </div>
      <div className="education">
        <h3>Education</h3>
        {educationDetails.map((education, index) => (
          <Education key={index} {...education} />
        ))}
      </div>
    </section>
  );
};

export default Resume;
