import React from 'react';

const Resume = () => {
  return (
    <div>
      <h2>Resume</h2>
      <p>Download my resume:</p>
      <a href="/path/to/your/resume.pdf" download>
        Download Resume
      </a>

      <h3>Proficiencies</h3>
      <ul>
        <li>React.js</li>
        <li>JavaScript</li>
        {/* Add more proficiencies as needed */}
      </ul>
    </div>
  );
};

export default Resume;