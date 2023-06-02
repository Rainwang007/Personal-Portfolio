import React from 'react';
import './WorkExperience.css'; 

function WorkExperience(props) {
  const { workExperience, onJobTitleClick, selectedJobIndex } = props;

  return (
    <div>
      {workExperience.map((experience, index) => (
        <div className="work-experience" key={index}>  {/* Add the class name here */}
          <h4 onClick={() => onJobTitleClick(index)}>{experience.title}</h4>
          {index === selectedJobIndex && (
            <>
              <p>{experience.company}</p>
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
  );
}

export default WorkExperience;
