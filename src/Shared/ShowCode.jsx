import React from "react";

// code block
import { CopyBlock, dracula } from "react-code-blocks";

const ShowCode = ({ code }) => {
  return (
    <div className=" transition-all duration-300 ease-in-out">
      <CopyBlock
        text={code}
        showLineNumbers={true}
        language={"jsx"}
        theme={dracula}
        codeBlock
      />
    </div>
  );
};

export default ShowCode;
