// AboutMe.jsx

import React from 'react';

const AboutMe = () => {
  return (
    <section id="about">
      <div className="about-content">
        <img
          src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
          alt="Profile"
          className="profile-picture"
        />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi there! I'm [Your Name], a passionate software developer on the
            brink of completing my coding bootcamp. I'm thrilled about the
            endless possibilities and challenges that the world of coding
            offers.
          </p>
          <p>
            During my bootcamp journey, I've gained hands-on experience in
            building web applications using technologies like HTML, CSS,
            JavaScript, and React. I've also dived into backend development with
            Node.js and Express, and I'm eager to expand my skills further.
          </p>
          <p>
            What excites me most is the opportunity to apply my newfound
            knowledge and creativity to real-world projects. I'm a quick learner
            with a knack for problem-solving, and I'm ready to contribute my
            skills to a dynamic and collaborative team.
          </p>
          <p>
            Outside of coding, you'll find me exploring new technologies,
            attending tech meetups, and occasionally indulging in a good cup of
            coffee. I believe in the power of continuous learning and look
            forward to the exciting journey ahead in the world of software
            development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
