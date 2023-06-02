import React, { useState } from 'react';
import nusLogo from './images/nus-logo.jpg'; 
import gaLogo from './images/ga-logo.png'; 
import './About.css';
import workExperience from './Experience.js'


function About() {
  const [selectedJobIndex, setSelectedJobIndex] = useState(null);

  const handleJobTitleClick = (index) => {
    if (index === selectedJobIndex) {
      setSelectedJobIndex(null);
    } else {
      setSelectedJobIndex(index);
    }
  };
  const summary = {
    title: 'About Me',
    description: 'Driven and adaptable professional with a strong foundation in soft skills, seeking to leverage my analytical mindset, diverse skill set, and passion for technology to transition into a software engineering role. Eager to combine my strong interpersonal abilities with technical expertise to deliver innovative solutions and contribute to the growth of a dynamic organization.'
  };
  
  return (
    <div className="content section about-me-section">
    <h1 className="section-title">{summary.title}</h1>
    <p className="section-description">{summary.description}</p>
      
      <h1>Education Background</h1>
      <div>
      <img className="img-logo" src={nusLogo} alt="NUS Logo" />
        <p>Bachelor of Science (Life Sciences), National University of Singapore (NUS) Aug 2011 - Jul 2014</p>
    <br/>
    <img className="img-logo" src={gaLogo} alt="GA Logo" />
        <p>Software Engineering Immersive, General Assembly   Mar – Sep 2023</p>
      </div>
      
      <h1>Work Experience</h1>
      <div>
        {workExperience.map((experience, index) => (
          <div className="work-experience" id={`work-experience-${index}`} key={index}>
            <h4 onClick={() => handleJobTitleClick(index)}>{experience.company}</h4>
            {index === selectedJobIndex && (
              <>
                <p>{experience.role}</p>
                <p>{experience.period}</p>
                <ul>
                  {experience.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  
  
  );
}

export default About;
