import React from "react";

const Notification = () => {
  return (
    <>
      <div
        className={`${
          isClicked && "translate-x-[0px]"
        } translate-x-[600px] transition-all duration-300 py-2 px-6 border border-primary rounded text-center cursor-pointer absolute top-5 right-5`}
        onClick={() => setIsClicked(false)}>
        Click me again for closing
      </div>
    </>
  );
};

export default Notification;
