// components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <h3>Contact Me</h3>
      <div>
        <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        {/* Add a link to a third platform (Stack Overflow, Twitter, etc.) */}
        <a href="https://stackoverflow.com/users/your-stack-overflow-profile" target="_blank" rel="noopener noreferrer">
          Stack Overflow
        </a>
      </div>
    </footer>
  );
};

export default Footer;
