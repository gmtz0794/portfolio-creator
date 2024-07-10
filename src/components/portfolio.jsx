import React from 'react';

function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <PortfolioItem
        title="Project 1"
        description="Weather Application"
        deployedLink=" https://gmtz0794.github.io/weather-app/"
      />
      <PortfolioItem
        title="Project 2"
        description="Description of Project 2"
        deployedLink="https://example.com/project2"
      />
    </div>
  );
}

function PortfolioItem({ title, description, deployedLink, githubLink }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        Deployed Link: <a href={deployedLink} target="_blank" rel="noopener noreferrer">{deployedLink}</a>
      </p>
    </div>
  );
}

export default Portfolio;
