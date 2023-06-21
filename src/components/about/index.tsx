import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

type aboutProps = {
  innerRef?: React.Ref<HTMLDivElement>
}

export const About = (props: aboutProps): JSX.Element => {
  return (
    <section id="about" ref={props.innerRef}
      className="relative py-[300px] mx-auto flex space-between justify-center flex-col w-4/5 lg:flex-row px-1"
    >
      <div
        className="rounded-full overflow-hidden basis-2/5 h-[40%] mx-[20%] lg:basis-2/5 lg:mx-[0%] self-center"
      >
        <StaticImage src="./profile.jpeg" alt="A photo of Andrew Jang" />
      </div>
      <div className="mx-auto p-[10px] sm:px-[50px] w-[100%] [&>p]:text-sm sm:[&>p]:text-base text-center lg:text-left lg:w-[60%]">
        <h2
          className='font-bold text-2xl pb-8'
        >
          Hi, I'm Andrew!
        </h2>
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
          Outside of work, I enjoy making games, digital art, and music.
        </p>
        <p>
          If you're interested in hearing more, I'm available through
          my <a href="https://www.linkedin.com/in/andrew-k-jang/">LinkedIn</a>
          {" and "}<a href="mailto:a.kyu.jang@gmail.com">email</a>.
        </p>
      </div>
    </section>
  );
};

export default About;
