import React from 'react';

function AboutMe() {
  return (
    <div>
      <h2>About Me</h2>
      <div>
        <img
          src="./assets/react.svg" 
          alt="Your Name"
          style={{ width: '150px', height: '150px', borderRadius: '50%' }}
        />
      </div>
      <p>
        Hello! I'm Your Name, a passionate web developer with experience in building single-page applications.
      </p>
    </div>
  );
}

export default AboutMe;
