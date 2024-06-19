import React, { useState } from "react";

// code block
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

// icons
import { FaRegCopy } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";

const ShowCode = ({ code }) => {
  const [isCopy, setIsCopy] = useState(false);

  // copy to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
    }, 1000);
  };
  return (
    <div className=" codeContainer transition-all duration-300 ease-in-out relative overflow-x-scroll max-w-[380px] 425px:max-w-[600px]">
      <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#000000d7] absolute right-0 top-3 cursor-pointer">
        {isCopy ? (
          <MdOutlineDone className="text-[1.3rem] text-primary" />
        ) : (
          <FaRegCopy
            className="text-[1.2rem] text-primary"
            onClick={copyToClipboard}
          />
        )}
      </div>
      <SyntaxHighlighter language="jsx" style={dracula} showLineNumbers>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default ShowCode;
