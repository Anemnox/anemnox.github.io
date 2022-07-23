import React from "react";

import TerminalOutput from "../declarations/TerminalOutput";

type OutputProps = {
  text: string
}

const TextOutput = (props: OutputProps): TerminalOutput => {
  return (
    <div>
      {props.text}
    </div>
  )
}

export default TextOutput;
