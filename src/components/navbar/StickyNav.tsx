import React from 'react';

import resume from "../../static/andrew-resume-2022.pdf";

import './stickyNavStyle.css';

export const StickyNav = (): JSX.Element => {
  return (
    <>
      <section className="navbar-padding"></section>
      <nav className="sticky-navbar">
        <a className="sticky-name" href="/#home">
          ANDREW JANG
        </a>
        <div className="sticky-navbar-content">
          <a href="/#about">ABOUT</a>
          <a href="/#projects">PROJECTS</a>
          <a href={resume}>RESUME</a>
        </div>
      </nav>
    </>
  );
};

export default StickyNav;
