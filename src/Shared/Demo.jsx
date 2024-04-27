import { useState } from "react";

const InputSwitch = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div
        className={`${
          toggle ? " bg-primary" : "bg-[#f0f0f0]"
        } w-[70px] h-[32px] p-1 border transition-colors duration-500 border-border  rounded-full relative`}
      >
        <div
          className={`${
            toggle ? " translate-x-[36px]" : "translate-x-[0px]"
          } w-[21px] h-[21px] transition-all duration-500 rounded-full cursor-pointer bg-[#fff]`}
          style={{ boxShadow: "1px 2px 5px 2px rgb(0,0,0,0.1)" }}
          onClick={() => setToggle(!toggle)}
        ></div>
      </div>
    </>
  );
};

export default InputSwitch;
