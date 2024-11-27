import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'coolBlog',
      description: 'Express.js/MySQL',
      link: "#",
      repo: "https://github.com/gmtz0794/cool-blog"
    },
    {
      name: 'noteReminder',
      description: 'HTML/CSS/JavaScript/Node.js',
      link: "#",
      repo: "https://github.com/gmtz0794/note-reminder"
    },
    {
      name: 'weatherApp',
      description: 'HTML/CSS/Javascript/API',
      link: "https://gmtz0794.github.io/weather-app/",
      repo: "https://github.com/gmtz0794/weather-app"
    },
    {
      name: 'autoPasswords',
      description: 'HTML/CSS/JavaScript',
      link: "https://gmtz0794.github.io/automatic-passwords/",
      repo: "https://github.com/gmtz0794/automatic-passwords"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
