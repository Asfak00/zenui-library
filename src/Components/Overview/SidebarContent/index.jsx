import React from "react";
import Overview from "./Content/Overview";
import Usage from "./Content/Usage";
import Templete from "./Content/Templete";
import Faq from "./Content/Faq";

const index = ({ startContent, componentContent }) => {
  return (
    <>
      {startContent === 0 && <Overview />}
      {startContent === 1 && <Usage />}
      {startContent === 2 && <Templete />}
      {startContent === 3 && <Faq />}
    </>
  );
};

export default index;
