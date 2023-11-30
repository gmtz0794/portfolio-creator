import React, { useState } from 'react';
import './App.css';
import AboutMe from './components/about-me';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';
import Footer from './components/footer';

function App() {
  const [currentSection, setCurrentSection] = useState('about'); // Default section is 'about'

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="portfolio-app">
      {/* Header */}
      <header>
        <h1>Your Name</h1>
        {/* Navigation */}
        <nav>
          <ul>
            <li
              className={currentSection === 'about' ? 'active' : ''}
              onClick={() => handleSectionChange('about')}
            >
              About Me
            </li>
            <li
              className={currentSection === 'portfolio' ? 'active' : ''}
              onClick={() => handleSectionChange('portfolio')}
            >
              Portfolio
            </li>
            <li
              className={currentSection === 'contact' ? 'active' : ''}
              onClick={() => handleSectionChange('contact')}
            >
              Contact
            </li>
            <li
              className={currentSection === 'resume' ? 'active' : ''}
              onClick={() => handleSectionChange('resume')}
            >
              Resume
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {/* Render different sections based on the current section */}
        {currentSection === 'about' && <AboutMe />}
        {currentSection === 'portfolio' && <Portfolio />}
        {currentSection === 'contact' && <Contact />}
        {currentSection === 'resume' && <Resume />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;