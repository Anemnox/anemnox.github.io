import React from "react";

import "./style.css";

export const Navbar = (): JSX.Element => {
  return (
    <nav>
      <span id="main-name">ANDREW JANG</span>
      <hr />
      <div className="space-navbar">
        <span>ABOUT</span>
        <span>PROJECTS</span>
        <span>CONTACT</span>
      </div>
    </nav>
  );
}

export default Navbar;
