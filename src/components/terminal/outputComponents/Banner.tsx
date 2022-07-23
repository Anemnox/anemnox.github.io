import React, { useState, useEffect } from "react";

import TerminalOutput from "../declarations/TerminalOutput";

import TextClock from "./TextClock";

const bannerStyle = {
}

const Banner = (): TerminalOutput => {
  return (
    <div style={bannerStyle}>
      <p>Current Time: <TextClock /></p>
      <h1>Andrew Jang</h1>
      <p>Full Stack Software Developer with a degree in Geography: data science.</p>
    </div>
  );
}

export default Banner;
