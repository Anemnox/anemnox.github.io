import React from 'react';

import resume from "../../static/JangResume.pdf";

import './mainNavStyle.css';

export const MainNav = (): JSX.Element => {
  return (
    <nav className="main-nav">
      <a className="main-nav-name" href="/#home">
        ANDREW JANG
      </a>
      <hr />
      <div className="main-navbar-content">
        <a href="/#about">ABOUT</a>
        <a href="/#projects">PROJECTS</a>
        <a href={resume}>RESUME</a>
      </div>
    </nav>
  );
};

export default MainNav;
