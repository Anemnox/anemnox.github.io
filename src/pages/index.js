import * as React from "react";
import EarthModel from "../components/earth/earthModel.js";
import "../styles/pageStyle.css";

// markup
const IndexPage = () => {
  return (
    <main>
      <EarthModel height={1500} width={1500} />
    </main>
  )
}

export default IndexPage
