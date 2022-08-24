import React from "react";

import "./style.css";

export const MainNav = (): JSX.Element => {
  return (
    <nav className="main-nav">
      <a className="main-name" href="/#home">ANDREW JANG</a>
      <hr />
      <div className="navbar-content">
        <a href="/#about">ABOUT</a>
        <a href="/#projects">PROJECTS</a>
        <a href="/#resume">RESUME</a>
      </div>
    </nav>
  );
}

export default MainNav;
