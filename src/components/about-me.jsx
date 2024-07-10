// AboutMe.jsx

import React from 'react';

const AboutMe = () => {
  return (
    <section id="about">
      <div className="about-content">
        <img
          src="https://scontent.ftij2-1.fna.fbcdn.net/v/t1.18169-9/13241225_1134713093237733_9074350898120228842_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7a1959&_nc_ohc=6vk4kk4mOGoAX82mgcN&_nc_ht=scontent.ftij2-1.fna&oh=00_AfDcurBEKVsjN0aaUlDr3SOYYGlpoPMKloyFSD_JxDqYRg&oe=65C0B8A6"
          alt="Profile"
          className="profile-picture"
        />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi there! I'm Gustavo, a passionate starter software developer just gradutated from USCD Coding Bootcamp.
             I'm thrilled about the possibilities and challenges that the world of coding
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
