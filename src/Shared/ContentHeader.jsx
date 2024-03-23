import React from "react";

const ContentHeader = ({ text, id }) => {
  return (
    <h1 id={id} className="font-[600] text-[#000] capitalize text-[1.5rem]">
      {text}
    </h1>
  );
};

export default ContentHeader;
