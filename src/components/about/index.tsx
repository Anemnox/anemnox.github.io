import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import './style.css';

export const About = (): JSX.Element => {
  return (
    <section id="about">
      <div className="profile-image">
        <StaticImage src="./profile.jpeg" alt="A photo of Andrew Jang" />
      </div>
      <div className="about-text">
        <h2>Hi, I'm Andrew!</h2>
        <p>
          I'm a software developer with a skillset in front-end development. I
          graduated from the University of Washington with a bachelors degree in
          Geography, specialized in data science and spatial analysis.
        </p>
        <p>
          While developing skills in research and data science in geography, I
          studied software development through personal projects and
          contributing to the development of the robot control system for the
          Underwater Remotely Operated Vehicles (UWROV) team at UW.
        </p>
        <p>
          Outside of work, I enjoy making amateur games, digital art, and music.
        </p>
        <p>
          If you're interested in hearing more, I'm available through
          my <a href="https://www.linkedin.com/in/andrew-jang-187260203/">LinkedIn</a>
          {" and "}<a href="mailto:a.kyu.jang@gmail.com">email</a>.
        </p>
      </div>
    </section>
  );
};

export default About;
