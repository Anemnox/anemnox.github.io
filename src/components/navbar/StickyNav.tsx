import React from 'react';

import resume from "../../static/JangResume.pdf";

import './stickyNavStyle.css';

export const StickyNav = (): JSX.Element => {
  return (
    <>
      <section className="h-[20px] bg-white"></section>
      <nav className="sticky top-0 left-0 w-full py-[5px] z-50 bg-white">
        <a className="text-xl font-bold sm:text-2xl px-2" href="/#home">
          ANDREW JANG
        </a>
        <div className="absolute top-[10px] right-[20px] align-middle	[&>*]:no-underline [&>*]:px-[2px] sm:[&>*]:px-1 [&>*]:text-xs sm:[&>*]:text-lg">
          <a href="/#about">ABOUT</a>
          <a href="/#projects">PROJECTS</a>
          <a href={resume}>RESUME</a>
        </div>
      </nav>
    </>
  );
};

export default StickyNav;
