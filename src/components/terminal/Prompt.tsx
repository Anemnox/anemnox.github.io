import React from "react";

import UserData from "./declarations/userData";

type PromptProps = {
  userData: UserData
}

const Prompt = (props: PromptProps): JSX.Element => {
  return (
    <>
      <span>{props.userData.user}@{props.userData.hostname} : {props.userData.dir} &gt; </span>
    </>
  )
}

export default Prompt;
