import * as React from "react";

import EarthModel from "../components/earth/EarthModel";

import "../styles/pageStyle.css";

// markup
const IndexPage = () => {
  return (
    <main>
      <div className="earth-container">
        <EarthModel styleName="earth" height={700} width={700} />
      </div>
    </main>
  );
}

export default IndexPage
