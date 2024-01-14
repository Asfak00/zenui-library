import React from "react";

// code block
import { CopyBlock, dracula } from "react-code-blocks";

const ShowCode = ({ code }) => {
  return (
    <CopyBlock
      text={code}
      showLineNumbers={true}
      language={"jsx"}
      theme={dracula}
      codeBlock
    />
  );
};

export default ShowCode;
