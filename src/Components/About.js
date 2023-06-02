import React, { useState } from 'react';

function About(props) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <h1>About Me</h1>
      <p>
        I'm {props.name}, a {props.jobTitle} with a passion for creating intuitive and
        engaging digital experiences. I specialize in {props.specialization}.
      </p>
      {showMore &&
        <div>
          <h2>More About Me</h2>
          <p>
            I live in {props.location} and I've been a developer for {props.yearsOfExperience} years.
          </p>
        </div>
      }
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}

export default About;
