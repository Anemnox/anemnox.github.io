import React from "react";

import "./style.css";

export const StickyNav = (): JSX.Element => {
  return (
    <>
      <section className="navbar-padding"></section>
      <nav className="sticky-navbar">
        <a className="main-name" href="/#home">ANDREW JANG</a>
        <div className="navbar-content">
          <a href="/#about">ABOUT</a>
          <a href="/#projects">PROJECTS</a>
          <a href="/#resume">RESUME</a>
        </div>
      </nav>
    </>
  );
}

export default StickyNav;
