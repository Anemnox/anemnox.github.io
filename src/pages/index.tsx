import * as React from "react";

import EarthModel from "../components/earth/EarthModel";
import Terminal from "../components/terminal/Terminal";

import "../styles/pageStyle.css";

// markup
const IndexPage = (): JSX.Element => {
  return (
    <main>
      <div className="earth-container">
        <EarthModel styleName="earth" height={1200} width={1200} />
      </div>
      <Terminal />

    </main>
  );
}

export default IndexPage
